export interface LoginForm {
    login: string;
    password: string;
}

export interface IAuthToken {
    accessToken: string,
    refreshToken: string,
}
