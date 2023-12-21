import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/molecules/LoginForm';
import OrderListPage from './pages/OrderListPage';

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

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LoginForm />
        </Route>

        {/* Rota protegida */}
        <PrivateRoute path="/orders" component={OrderListPage} />
      </Switch>
    </Router>
  );
}
