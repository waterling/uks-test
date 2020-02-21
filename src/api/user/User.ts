import BaseApiClient from '../helpers/BaseApiClient';
import { IUserProfile } from './interfaces';

class User {
    fetchProfile = async (): Promise<IUserProfile> => {
        const result = await BaseApiClient.axios.post<IUserProfile>('/users/me');
        return result.data;
    };
}

export default new User()
