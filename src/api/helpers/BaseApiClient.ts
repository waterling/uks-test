import TokenStorage from '../../helpers/utils/storage/TokenStorage';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import config from '../config';

class BaseApiClient {
    axios: AxiosInstance;
    refreshing: boolean = false;
    failedRequests: FailedRequest[] = [];

    constructor(baseURL: string) {
        this.axios = axios.create({
            baseURL,
        });


        this.axios.interceptors.request.use(this.setToken);
        this.axios.interceptors.response.use(f => f, this.checkAuthFailed);
    }

    private setToken = (config: AxiosRequestConfig) => {
        const newConfig = {
            ...config,
        };

        if (!newConfig.headers) {
            newConfig.headers = {}
        }

        newConfig.headers['Authorization'] = `Berear ${TokenStorage.accessToken}`;

        return newConfig;
    };

    private checkAuthFailed = (error: AxiosError) => {
        if (error.response?.status === 401 && !error.config.headers['_retry']) {
            return this.handleUnAuthorize(error);
        }
        TokenStorage.clear();
        window.history.pushState({}, '', '/auth');
        return Promise.reject(error);
    };

    private handleUnAuthorize = async (error: AxiosError) => {
        const originalRequest = error.config;

        if (this.refreshing) {
            return new Promise((resolve, reject) => {
                this.failedRequests.push({ resolve, reject })
            }).then(token => {
                originalRequest.headers['Authorization'] = 'Bearer ' + token;
                return this.axios(originalRequest);
            }).catch(err => {
                return Promise.reject(err);
            })
        }
        originalRequest.headers['_retry'] = true;
        this.refreshing = true;
        return new Promise((resolve, reject) => {
            axios.post('/auth/refresh', { refreshToken: TokenStorage.refreshToken })
            .then(({ data }) => {
                TokenStorage.set({
                    refreshToken: data.refreshToken,
                    accessToken: data.token,
                });
                this.processFailedRequests(null, data.token);
                resolve(this.axios(originalRequest));
            })
            .catch((err) => {
                this.processFailedRequests(err, null);
                reject(err);
            })
            .then(() => this.refreshing = false)
        })
    };

    processFailedRequests = (error: AxiosError | null, token: string | null) => {
        this.failedRequests.forEach(prom => {
            if (error) {
                prom.reject(error);
            } else if (token) {
                prom.resolve(token);
            }
        });

        this.failedRequests = [];
    }
}

interface FailedRequest {
    resolve: (token: string) => void;
    reject: (err: AxiosError) => void;
}

export default new BaseApiClient(config.API_URL)
