import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';
import PublicLayout from '~/pages/_layouts/public';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  screenLoginRegister,
  ...rest
}) {

  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && screenLoginRegister) {
    return <Redirect to="/" />;
  }

  let Layout = screenLoginRegister ? AuthLayout : null;

  if (!Layout && !isPrivate) {
    Layout = signed ? DefaultLayout: AuthLayout;
  }

  if (!Layout && !isPrivate) {
    Layout = PublicLayout;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
