import BaseApiClient from '../helpers/BaseApiClient';
import { IAuthToken, ILoginForm } from './interfaces';

class Auth {
    login = async (data: ILoginForm): Promise<IAuthToken> => {
        const result = await BaseApiClient.axios.post<IAuthToken>('/auth/login', data);
        return result.data;
    };
}

export default new Auth()
