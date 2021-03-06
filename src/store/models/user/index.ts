import { createModel } from '@rematch/core';
import { UserState } from './interfaces';
import { IUserProfile } from '../../../api/user/interfaces';
import User from '../../../api/user/User';

export const user = createModel<UserState>(
  {
      state: {
          profile: null
      },
      reducers: {
          setProfile: (state, profile?: IUserProfile) => {
              return ({
                  ...state,
                  profile,
              });
          }
      },
      effects: dispatch => ({
          async fetchProfile() {
              const profile = await User.fetchProfile();
              dispatch.user.setProfile(profile)
          }
      }),
  }
);
