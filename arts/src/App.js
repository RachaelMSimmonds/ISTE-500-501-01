import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import { Text } from 'react';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Login from './login';
import Registration from './registration';
import AdminRegistration from './adminRegistration';
import Landing from './landing';
import AccessError from './error';
import AdminPortal from './admin/adminPortal';
import DataAnalytics from './admin/dataAnalytics';
import PassManagement from './admin/passManagement';
import UserManagement from './admin/userManagement';
import PassAccepted from './admin/passAccepted';
import PassDenied from './admin/passDenied';
import ConfirmPassword from './passwordchange/confirmPassword';
import PasswordResetReq from './passwordchange/passwordResetReq';
import ChangePassword from './passwordchange/changePassword';
import User from './user/user';
import PassStore from './user/passStore';
import UserPasses from './user/userPass';
import AccountSettings from './user/accountSettings';
import ConfirmEmail from './user/confirmEmail';
import ConfirmSent from './user/confirmSent';
import PassApp1 from './user/passApp1';
import PassApp2 from './user/passApp2';
import logo from './logo.svg';
import './App.css';


function App(){
  return (
    	<Router>
	  		<div>
	  			<Switch>
	  				<Route exact path = "/"><Landing /></Route>
	  				<Route path="/login"><Login /></Route>
					<Route path="/registration"><Registration /></Route> 
					<Route path="/adminRegistration"><AdminRegistration /></Route> 
	  				<Route path="/adminPortal/:id"><AdminPortal /></Route>
					<Route path="/dataAnalytics/:id"><DataAnalytics /></Route>
					<Route path="/passManagement/:id"><PassManagement /></Route>
					<Route path="/userManagement/:id"><UserManagement /></Route>
					<Route path="/passAccepted/:id"><PassAccepted /></Route>
					<Route path="/passDenied/:id"><PassDenied /></Route>
	  				<Route exact path="/userportal/:id"><User /></Route>
	  				<Route path="/userportal/userpass/:id"><UserPasses /></Route>
	  				<Route path="/userportal/passstore/:id"><PassStore /></Route>
	  				<Route exact path="/userportal/accountsettings/:id"><AccountSettings /></Route>
	  				<Route exact path="/userportal/accountsettings/confirmemail/:id"><ConfirmEmail /></Route>
	  				<Route exact path="/userportal/accountsettings/confirmedemail/:id"><ConfirmEmail /></Route>
	  				<Route exact path="/userportal/accountsettings/passapp1/:id"><PassApp1 /></Route>
	  				<Route exact path="/userportal/accountsettings/passapp2/:id"><PassApp2 /></Route>
                    <Route path="/confirmpassword"><ConfirmPassword /> </Route>
                    <Route path="/passwordResetReq"><PasswordResetReq /></Route> 
                    <Route path="/changePassword"><ChangePassword /></Route>
					<Route path="/error"><AccessError /></Route>
	  			</Switch>
	  		</div>
	  	</Router>
  );
}

export default App;
