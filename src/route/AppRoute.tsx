import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../components/auth/SignIn';
import Register from '../components/auth/SignUp';
import Home from '../components/home/Home';
import Navbar from '../components/navbar/Navbar';
import TaskForm from '../components/task/TaskForm';
import Tasks from '../components/task/Tasks';

export interface IAppRoute {
  isLogged: boolean;
}

const AppRoute = () => {
  const [loginAuth, setLoginAuth] = useState<IAppRoute>({
    isLogged: false,
  });

  return (
    <React.Fragment>
      <Router>
        <Navbar isLogged={loginAuth.isLogged} setAuthLogin={setLoginAuth} />
          <Switch>
            <Route exact path='/login'>
              <SignIn setLoginAuth={setLoginAuth} />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/tasks'>
              <Tasks />
            </Route>
            <Route path='/new-task'>
              <TaskForm />
            </Route>
            <Route path='/update-task/:id'>
              <TaskForm />
            </Route>
          </Switch>
      </Router>
    </React.Fragment>
  );
};
export default AppRoute;
