import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import TaskForm from './components/task/TaskForm';
import Tasks from './components/task/Tasks';

export interface IAppState  {
  isLogin: boolean;
}

const App = () => {

  const [authLogin, setAuthLogin] = useState<IAppState>({
    isLogin: false,
  });

  return (
    <React.Fragment>
      <Router>
        <Navbar isLogin={authLogin.isLogin} setAuthLogin={setAuthLogin} />
        <Switch>
          <Route exact path='/login'>
            <SignIn setAuthLogin={setAuthLogin} />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/home'>
            <Home isLogin={authLogin.isLogin}  />
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
}

export default App;
