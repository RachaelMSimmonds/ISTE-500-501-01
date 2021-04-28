import Cookies from 'js-cookie';
import React from 'react';
import { Route, Redirect, useState } from 'react-router-dom';
import { getToken, getUserSession } from './Common';
 
// handle the public routes
function PublicRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => !getToken() ? 
      children : <Redirect to={{ pathname: "/userPortal/1", state: { from: location }}} />}
    />
  );
}
 
export default PublicRoute;