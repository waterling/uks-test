import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import LeftMenu from '../LeftMenu/LeftMenu';

import styles from './AuthPages.module.scss';

const AuthPages: React.FC<IProps> = (props) => {
    return (
      <div className={styles.authPage}>
          <LeftMenu/>

          <div className={styles.content}>
              <Switch>
                  <Route path='/'>
                      <Home/>
                  </Route>
              </Switch>
          </div>
      </div>
    );
};

interface IProps {
}

export default AuthPages;
