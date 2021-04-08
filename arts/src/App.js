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
	  			</Switch>
	  		</div>
	  	</Router>
  );
}

export default App;
