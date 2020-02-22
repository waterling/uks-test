import BaseApiClient from '../helpers/BaseApiClient';
import { IAuthToken, ILoginForm } from './interfaces';
import { SuccessData } from '../helpers/SuccessData';

class Auth {
    login = async (data: ILoginForm): Promise<IAuthToken> => {
        const result = await BaseApiClient.axios.post<SuccessData<IAuthToken>>('/auth/login', data);
        return result.data.data;
    };
}

export default new Auth()
