import { createModel } from '@rematch/core';
import { AuthState } from './interfaces';
import TokenStorage from '../../../helpers/utils/storage/TokenStorage';
import { IAuthToken, ILoginForm } from '../../../api/auth/interfaces';
import Auth from '../../../api/auth/Auth';

export const auth = createModel<AuthState>(
  {
      state: {},
      reducers: {
          setToken: (state: AuthState, token: IAuthToken): AuthState => {
              TokenStorage.set(token);
              return {
                  ...state,
                  token
              }
          }
      },
      effects: dispatch => ({
          async login(data: ILoginForm) {
              const token = await Auth.login(data);
              dispatch.auth.setToken(token);
          }
      }),
  }
);
