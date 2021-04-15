import React from 'react';
import { Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { getToken } from './Common';
 
// handle the public routes
function PublicRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => !getToken() ? 
      children : <Redirect to={{ pathname: '/' }} />}
    />
  );
}
 
export default PublicRoute;