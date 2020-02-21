import LocalStorage from './LocalStorage';
import { IAuthToken } from '../../../api/auth/interfaces';

class TokenStorage {
    tokenKey: string = 'token';
    refreshTokenKey: string = 'rtk';

    set = (token: IAuthToken) => {
        LocalStorage.save(this.tokenKey, token.accessToken);
        LocalStorage.save(this.refreshTokenKey,  token.refreshToken);
    };

    get accessToken (): string | null {
        return LocalStorage.get(this.tokenKey);
    };

    get refreshToken (): string | null {
        return LocalStorage.get(this.refreshTokenKey);
    };

    clear = () => {
        LocalStorage.remove(this.tokenKey);
        LocalStorage.remove(this.refreshTokenKey);
    };
}

export default new TokenStorage();
