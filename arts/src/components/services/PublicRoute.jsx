import React from 'react';
import { Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { getToken, getUserSession } from './Common';
 
// handle the public routes
function PublicRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => !getUserSession() ? 
      children : <Redirect to={{ pathname: '/' }} />}
    />
  );
}
 
export default PublicRoute;