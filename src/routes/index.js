import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Meetups from '~/pages/Meetups';
import MeetupsNew from '~/pages/Meetups/New';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} isPrivate />

      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/meetups" exact component={Meetups} isPrivate />
      <Route path="/meetups/new" component={MeetupsNew} isPrivate />

      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
