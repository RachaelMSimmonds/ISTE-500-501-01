import React, { useState, useEffect } from "react";
import { Component, Text } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,
  	Switch,
  	Route,
  	Link,
	useHistory,
	useLocation,
	Redirect } from "react-router-dom";
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Cookies from 'js-cookie'
import axios from 'axios';
import PrivateRoute from './components/services/PrivateRoute';
import PublicRoute from './components/services/PublicRoute';
import { 
	getToken, 
	removeUserSession, 
	getUserSession,
	setUserSession, 
	setErrorSession, 
	getErrorSession } from './components/services/Common';
import Login from './components/account/login';
import Registration from './components/account/registration';
import AdminRegistration from './components/admin/adminRegistration';
import HomeLayout from './components/layouts/homelayout';
import NavBar from './components/navigation/navBar';
import AdminPortal from './components/admin/adminPortal';
import DataAnalytics from './components/admin/dataAnalytics';
import PassManagement from './components/admin/passManagement';
import UserManagement from './components/admin/userManagement';
import PassAccepted from './components/admin/passAccepted';
import ConfirmPassword from './components/account/confirmPassword';
import PasswordResetReq from './components/account/passwordResetReq';
import ChangePassword from './components/account/changePassword';
import User from './components/user/user';
import PassStore from './components/user/passStore';
import AccessError from './components/navigation/error'
import UserPasses from './components/user/userPass';
import AccountSettings from './components/user/accountSettings';
import ConfirmEmail from './components/user/confirmEmail';
import ConfirmSent from './components/user/confirmSent';
import PassApp1 from './components/user/passApp1';
import PassApp2 from './components/user/passApp2';
import logo from './logo.svg';
import './App.css';


function App(){
  
	const [authLoading, setAuthLoading] = useState(false);
	const {REACT_APP_API_URL , REACT_APP_PUBLIC_URL} = process.env;

	useEffect(() => { // tells component to do something after render.
		const token = getToken();
		if (!token) {
		  return;
		}
	 
		axios.get(`${REACT_APP_API_URL}/verifyToken?token=${token}`).then(response => {
			console.log("authorized!");
			setUserSession(response.data.token, response.data.user);
		}).catch(error => {
		  	if (!error.response){
				console.log("APP.js: " + error);
				setErrorSession(error);
			  }else {
				console.log("APP.js: " + error.response.status);
				setErrorSession(error.response.status);
				removeUserSession();
			  }
		});
	}, []);
	
	return (
		<Router>
			<div>
				< NavBar />
				<Switch>
					{/* Public Routes without auth token required */}
					<Route exact path = "/"><HomeLayout /></Route>
					<PublicRoute path="/login"><Login /></PublicRoute>
					<PublicRoute path="/registration"><Registration /></PublicRoute> 
					<PublicRoute path="/adminRegistration"><AdminRegistration /></PublicRoute>

					{/* Private with auth required */}
					<PrivateRoute exact path="/adminPortal"><AdminPortal /></PrivateRoute>
					<PrivateRoute path="/adminPortal/:id"><AdminPortal /></PrivateRoute>
					<PrivateRoute path="/dataAnalytics/:id"><DataAnalytics /></PrivateRoute>
					<PrivateRoute path="/passManagement/:id"><PassManagement /></PrivateRoute>
					<PrivateRoute path="/userManagement/:id"><UserManagement /></PrivateRoute>
					<PrivateRoute path="/passAccepted/:id"><PassAccepted /></PrivateRoute>
					<PrivateRoute exact path="/userportal/:id"><User /></PrivateRoute>
					<PrivateRoute exact path="/userportal/userpass/:id"><UserPasses /></PrivateRoute>
					<PrivateRoute exact path="/userportal/passstore/:id"><PassStore /></PrivateRoute>
					<PrivateRoute exact path="/userportal/accountsettings/:id"><AccountSettings /></PrivateRoute>
					<PrivateRoute exact path="/userportal/accountsettings/confirmemail/:id"><ConfirmEmail /></PrivateRoute>
					<PrivateRoute exact path="/userportal/accountsettings/confirmedemail/:id"><ConfirmEmail /></PrivateRoute>
					<PrivateRoute exact path="/userportal/accountsettings/passapp1/:id"><PassApp1 /></PrivateRoute>
					<PrivateRoute exact path="/userportal/accountsettings/passapp2/:id"><PassApp2 /></PrivateRoute>
					<PrivateRoute path="/confirmpassword" ><ConfirmPassword /> </PrivateRoute>
					<PrivateRoute path="/passwordResetReq"><PasswordResetReq /></PrivateRoute> 
					<PrivateRoute path="/changePassword"><ChangePassword /></PrivateRoute>

				</Switch>
			</div>
		</Router>
  );
}

export default App;
