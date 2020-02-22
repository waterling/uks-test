import BaseApiClient from '../helpers/BaseApiClient';
import { IUserProfile } from './interfaces';
import { SuccessData } from '../helpers/SuccessData';

class User {
    fetchProfile = async (): Promise<IUserProfile> => {
        const result = await BaseApiClient.axios.get<SuccessData<IUserProfile>>('/users/me');
        return result.data.data;
    };
}

export default new User()
