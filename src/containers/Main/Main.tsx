import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import PrivateRoute from '../Routes/PrivateRoute';
import AuthPages from '../AuthPages/AuthPages';

const Main: React.FC = () => {
    return (
      <Router>
          <Switch>
              <Route path='/auth'>
                  <SignIn/>
              </Route>
              <PrivateRoute path='/'>
                  <AuthPages/>
              </PrivateRoute>
          </Switch>
      </Router>
    );
};

export default Main;
