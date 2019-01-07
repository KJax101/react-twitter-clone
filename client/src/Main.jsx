import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginContainer from './login_container/LoginContainer';
import UserHomePage from './landing_page/UserHomePage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LoginContainer} />
      <Route path='/home' component={UserHomePage} />
    </Switch>
  </main>
)

export default Main;

