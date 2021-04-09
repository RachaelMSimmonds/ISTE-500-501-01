import React, { useContext } from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,
  	Switch,
  	Route,
  	Link,
	useHistory,
	useLocation,
	Redirect } from "react-router-dom";
import { Text } from 'react';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Cookies from 'js-cookie'

import Login from './components/passwordchange/login';
import Registration from './components/navigation/registration';
import AdminRegistration from './components/admin/adminRegistration';
import Landing from './components/navigation/landing';
import AdminPortal from './components/admin/adminPortal';
import DataAnalytics from './components/admin/dataAnalytics';
import PassManagement from './components/admin/passManagement';
import UserManagement from './components/admin/userManagement';
import PassAccepted from './components/admin/passAccepted';
import ConfirmPassword from './components/passwordchange/confirmPassword';
import PasswordResetReq from './components/passwordchange/passwordResetReq';
import ChangePassword from './components/passwordchange/changePassword';
import User from './components/user/user';
import PassStore from './components/user/passStore';
import UserPasses from './components/user/userPass';
import AccountSettings from './components/user/accountSettings';
import ConfirmEmail from './components/user/confirmEmail';
import ConfirmSent from './components/user/confirmSent';
import PassApp1 from './components/user/passApp1';
import PassApp2 from './components/user/passApp2';
import logo from './logo.svg';
import './App.css';


function App(){
  return (
		<ProvideAuth>
			<Router>
				<div>
					<Switch>
						
						{/* Public */}
						<Route exact path = "/"><Landing /></Route>
						<Route path="/login"><Login /></Route>
						<Route path="/registration"><Registration /></Route> 
						<Route path="/adminRegistration"><AdminRegistration /></Route>

						{/* Private */}
						<PrivateRoute path="/adminPortal/:id"><AdminPortal /></PrivateRoute>
						<PrivateRoute path="/dataAnalytics/:id"><DataAnalytics /></PrivateRoute>
						<PrivateRoute path="/passManagement/:id"><PassManagement /></PrivateRoute>
						<PrivateRoute path="/userManagement/:id"><UserManagement /></PrivateRoute>
						<PrivateRoute path="/passAccepted/:id"><PassAccepted /></PrivateRoute>
						<PrivateRoute exact path="/userportal/:id"><User /></PrivateRoute>
						<PrivateRoute path="/userportal/userpass/:id"><UserPasses /></PrivateRoute>
						<PrivateRoute path="/userportal/passstore/:id"><PassStore /></PrivateRoute>
						<PrivateRoute exact path="/userportal/accountsettings/:id"><AccountSettings /></PrivateRoute>
						<PrivateRoute exact path="/userportal/accountsettings/confirmemail/:id"><ConfirmEmail /></PrivateRoute>
						<PrivateRoute exact path="/userportal/accountsettings/confirmedemail/:id"><ConfirmEmail /></PrivateRoute>
						<PrivateRoute exact path="/userportal/accountsettings/passapp1/:id"><PassApp1 /></PrivateRoute>
						<PrivateRoute exact path="/userportal/accountsettings/passapp2/:id"><PassApp2 /></PrivateRoute>
						<PrivateRoute path="/confirmpassword"><ConfirmPassword /> </PrivateRoute>
						<PrivateRoute path="/passwordResetReq"><PasswordResetReq /></PrivateRoute> 
						<PrivateRoute path="/changePassword"><ChangePassword /></PrivateRoute>

					</Switch>
				</div>
	  		</Router>
		</ProvideAuth>
  );
}

// fake authenication for testing
const fakeAuth = {
	isAuthenticated: false,
	signin(cb) {
	  fakeAuth.isAuthenticated = true;
	  setTimeout(cb, 100); // fake async
	},
	signout(cb) {
	  fakeAuth.isAuthenticated = false;
	  setTimeout(cb, 100);
	}
};

// API Request Options Setup Example
const requestOptions = {
	method: 'POST',
	headers: { 'Content-Type': 'application/json'},
	body: JSON.stringify({ title: 'Empty' })
};


// ProvideAuth wrapper
function ProvideAuth({ children }){
	const auth = useProvideAuth();
	return  (
		<authContext.Provider value={auth}>
			{children}
		</authContext.Provider>
	)
}

// useAuth
function useAuth(){
	return useContext(authContext);
}//end useAuth

// useProvideAuth
function useProvideAuth() {
	const [user, setUser] = useState(null);
  
	// signin
	const signin = (username, password) => {
	  	
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({ username, password})
		};
		const response = await fetch('/login/', requestOptions);
		const data = await response.json();

		if (!data.ok){
			// Fail
			console.log('Failed logging')
		} else{
			// Success
			console.log('Successful')
			setUser(response.user)
			// Save a token into cookies!
			Cookies.set(response.user)
		}

		cb();
	};//end signin
	
	// signout
	const signout = cb => {
	  return fakeAuth.signout(() => {
		setUser(null);
		cb();
	  });
	};//end signout
  
	return {
	  user,
	  signin,
	  signout
	};
}//end useProvideAuth

// PrivateRoute wrapper
function PrivateRoute({ children, ...rest }) {
	let auth = useAuth();
	return (
	  <Route
		{...rest}
		render={({ location }) =>
		  auth.user ? (
			children
		  ) : (
			<Redirect
			  to={{
				pathname: "/login",
				state: { from: location }
			  }}
			/>
		  )
		}
	  />
	);
  }

export default App;
