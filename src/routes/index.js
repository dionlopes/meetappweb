import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/login" component={SignIn} screenLoginRegister/>
      <Route path="/register" component={SignUp} screenLoginRegister/>
    </Switch>
  )
}
