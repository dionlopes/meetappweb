import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivate />

      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
    </Switch>
  )
}
