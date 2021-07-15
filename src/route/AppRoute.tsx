import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {
  SignIn,
  SignUp,
  Navbar,
  Home,
  Main,
  Tasks,
  TaskForm,
} from '../components/.';
import { parseAccountInfo } from '../helpers/LocalStorageHelp';

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

export interface IAppRouter {
  isAuthenticated: boolean;
}

const AppRoute = () => {
  const [auth, setAuth] = useState<IAppRouter>({
    isAuthenticated: false,
  });

  useEffect(() => {
    const auth = parseAccountInfo();
    if (auth) setAuth({ isAuthenticated: true });
    return () => {};
  }, []);

  return (
    <>
      <Router>
        <Navbar isAuthenticated={auth.isAuthenticated} setAuth={setAuth} />
        <Switch>
          <PublicRoute
            exact={true}
            path="/"
            isAuthenticated={auth.isAuthenticated}
            component={Main}
          />
          <PublicRoute
            exact={true}
            path="/login"
            isAuthenticated={auth.isAuthenticated}
          >
            <SignIn setLoginAuth={setAuth} />
          </PublicRoute>
          <PublicRoute
            exact={true}
            path="/register"
            isAuthenticated={auth.isAuthenticated}
            component={SignUp}
          />
          <ProtectedRoute
            path="/home"
            exact={true}
            isAuthenticated={auth.isAuthenticated}
            component={Home}
          />
          <ProtectedRoute
            path="/tasks"
            exact={true}
            isAuthenticated={auth.isAuthenticated}
            component={Tasks}
          />
          <ProtectedRoute
            path="/new-task"
            exact={true}
            isAuthenticated={auth.isAuthenticated}
            component={TaskForm}
          />
          <ProtectedRoute
            path="/update-task/:id"
            exact={true}
            isAuthenticated={auth.isAuthenticated}
            component={TaskForm}
          />
        </Switch>
      </Router>
    </>
  );
};
export default AppRoute;
