import { createModel } from '@rematch/core';
import { AuthState } from './interfaces';
import TokenStorage from '../../../helpers/utils/storage/TokenStorage';
import { IAuthToken, LoginForm } from '../../../api/auth/interfaces';
import Auth from '../../../api/auth/Auth';

export const auth = createModel<AuthState>(
  {
      state: {},
      reducers: {
          setToken: (state: AuthState, token?: IAuthToken) => {
              return {
                  token,
              }
          }
      },
      effects: dispatch => ({
          async login(data: LoginForm) {
              const auth = await Auth.login(data);
              TokenStorage.set(auth);
              dispatch.auth.setToken(auth);
          }
      }),
  }
);
