import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import OrderListPage from '../pages/OrderListPage';
import LoginPage from '../pages/LoginPage';

export default function AppRouter(){
  const isAuthenticated = true;

  interface PrivateRouteProps {
    component: React.ComponentType<any>;
    path: string;
    exact?: boolean;
  }

  const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/orders-list"  component={OrderListPage} />
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </Router>
  )
}