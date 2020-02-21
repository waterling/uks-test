import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import PrivateRoute from '../Routes/PrivateRoute';
import AuthPages from '../Routes/AuthPages';
import UnAuthorizeRoute from '../Routes/UnAuthorizeRoute';
import { connect } from 'react-redux';
import { IRootState } from '../../store';

const Main: React.FC = () => {
    return (
      <Router>
          <Switch>
              <UnAuthorizeRoute path='/auth'>
                  <SignIn/>
              </UnAuthorizeRoute>

              <PrivateRoute path='/'>
                  <AuthPages/>
              </PrivateRoute>
          </Switch>
      </Router>
    );
};

export default connect(({ auth }: IRootState) => ({token: auth.token}))(Main);
