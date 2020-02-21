import * as React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import TokenStorage from '../../helpers/utils/storage/TokenStorage';

const PrivateRoute: React.FC<RouteProps> = (props) => {
    if (!TokenStorage.accessToken) {
        return (
          <Route {...props}>
              {props.children}
          </Route>
        );
    }

    return <Redirect to='/auth' />;
};

export default PrivateRoute;
