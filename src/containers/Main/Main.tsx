import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import Home from '../Home/Home';

const Main: React.FC = () => {
    return (
      <div>
        <Router>
            <Switch>
                <Route path='/auth'>
                    <SignIn/>
                </Route>
                <Route path='/'>
                    <Home/>
                </Route>
            </Switch>
        </Router>
      </div>
    );
};

export default Main;
