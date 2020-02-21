import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';

const AuthPages: React.FC<IProps> = (props) => {
    return (
      <div>
          <Switch>
              <Route path='/'>
                  <Home/>
              </Route>
          </Switch>
      </div>
    );
};

interface IProps {
}

export default AuthPages;
