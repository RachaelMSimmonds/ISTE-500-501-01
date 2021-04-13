import React, { useState, useEffect } from "react";
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
import axios from 'axios';
import PrivateRoute from './components/services/PrivateRoute'
import PublicRoute from './components/services/PublicRoute'
import { getToken, removeUserSession, setUserSession } from './components/services/Common'
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
  
	const [authLoading, setAuthLoading] = useState(true);

	useEffect(() => {
		const token = getToken();
		if (!token) {
		  return;
		}
	 
		axios.get(`http://localhost:5000/verifyToken?token=${token}`).then(response => {
			console.log("authorized!");
			setUserSession(response.data.token, response.data.user);
			setAuthLoading(false);
		}).catch(error => {
		  	if (!error.response){
				console.log(error);
			  }else {
				console.log(error.response.status);
				removeUserSession();
				setAuthLoading(false);  
			  }
		});
	}, []);

	if (authLoading && getToken()) {
		return console.log('Checking Authentication...');
	}
	
	return (
		<Router>
			<div>
				<Switch>
					
					{/* Public */}
					<Route exact path = "/" component={Landing}><Landing /></Route>
					<PublicRoute path="/login" component={Login}><Login /></PublicRoute>
					<PublicRoute path="/registration" component={Registration}><Registration /></PublicRoute> 
					<PublicRoute path="/adminRegistration"  component={AdminRegistration}><AdminRegistration /></PublicRoute>

					{/* Private */}
					<PrivateRoute path="/adminPortal" component={AdminPortal}><AdminPortal /></PrivateRoute>
					<PrivateRoute path="/adminPortal/:id"><AdminPortal /></PrivateRoute>
					<PrivateRoute path="/dataAnalytics/:id"><DataAnalytics /></PrivateRoute>
					<PrivateRoute path="/passManagement/:id"><PassManagement /></PrivateRoute>
					<PrivateRoute path="/userManagement/:id"><UserManagement /></PrivateRoute>
					<PrivateRoute path="/passAccepted/:id"><PassAccepted /></PrivateRoute>
					<PrivateRoute path="/userportal/:id"><User /></PrivateRoute>
					<PrivateRoute path="/userportal/userpass/:id"><UserPasses /></PrivateRoute>
					<PrivateRoute path="/userportal/passstore/:id"><PassStore /></PrivateRoute>
					<PrivateRoute path="/userportal/accountsettings/:id"><AccountSettings /></PrivateRoute>
					<PrivateRoute path="/userportal/accountsettings/confirmemail/:id"><ConfirmEmail /></PrivateRoute>
					<PrivateRoute path="/userportal/accountsettings/confirmedemail/:id"><ConfirmEmail /></PrivateRoute>
					<PrivateRoute path="/userportal/accountsettings/passapp1/:id"><PassApp1 /></PrivateRoute>
					<PrivateRoute path="/userportal/accountsettings/passapp2/:id"><PassApp2 /></PrivateRoute>
					<PrivateRoute path="/confirmpassword" component={ConfirmPassword}><ConfirmPassword /> </PrivateRoute>
					<PrivateRoute path="/passwordResetReq" component={PasswordResetReq}><PasswordResetReq /></PrivateRoute> 
					<PrivateRoute path="/changePassword" component={ChangePassword}><ChangePassword /></PrivateRoute>

				</Switch>
			</div>
		</Router>
  );
}

export default App;
