import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import OrderListPage from '../pages/OrderListPage';
import LoginPage from '../pages/LoginPage';

export default function AppRouter() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const PrivateRoute: React.FC<{ path: string; exact?: boolean; component: React.ComponentType<any> }> = ({
    component: Component,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} setAuthenticated={setAuthenticated} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/orders-list" component={OrderListPage} />
        <Route path="/login" render={(props) => <LoginPage {...props} setAuthenticated={setAuthenticated} />} />
        <Route path="/" exact>
          {isAuthenticated ? <Redirect to="/orders-list" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}
