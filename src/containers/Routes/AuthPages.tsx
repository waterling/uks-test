import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Profile from '../Profile/Profile';
import LeftMenu from '../LeftMenu/LeftMenu';

import styles from './AuthPages.module.scss';
import { connect } from 'react-redux';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const AuthPages: React.FC<IProps> = (props) => {
    useEffect(() => {
        props.fetchProfile();
    }, []);

    if (!props.profile) {
        return (
          <div>
              Loading...
          </div>
        );
    }

    return (
      <div className={styles.authPage}>
          <LeftMenu />

          <div className={styles.content}>
              <Switch>
                  <Route path='/profile'>
                      <Profile />
                  </Route>

                  <Redirect exact to='/profile' from='/' />

                  <Route path='*'>
                      Not Found
                  </Route>

              </Switch>
          </div>
      </div>
    );
};


type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>

const mapDispatch = (dispatch: any) => ({
    fetchProfile: dispatch.user.fetchProfile
});

const mapState = (state: IRootState) => ({
    profile: state.user.profile
});

interface IProps extends connectedProps{
}

export default connect(mapState, mapDispatch)(AuthPages);
