export interface ILoginForm {
    email: string;
    password: string;
}

export interface IAuthToken {
    accessToken: string,
    refreshToken: string,
}
