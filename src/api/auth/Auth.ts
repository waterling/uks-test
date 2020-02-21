import BaseApiClient from '../helpers/BaseApiClient';
import { IAuthToken, LoginForm } from './interfaces';

class Auth {
    login = async (data: LoginForm): Promise<IAuthToken> => {
        const result = await BaseApiClient.axios.post<IAuthToken>('/auth/login', data);
        return result.data;
    };
}

export default new Auth()
