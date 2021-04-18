import React from 'react';
import { Route, Redirect, useHistory, useLocation, useState } from 'react-router-dom';
import { getToken } from './Common';
 
// handle the private routes
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => getToken() ? 
      children : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    />
  );
}
 
export default PrivateRoute;