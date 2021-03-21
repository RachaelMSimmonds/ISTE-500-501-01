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
import AdminPortal from './admin/adminPortal';
import DataAnalytics from './admin/dataAnalytics';
import PassManagement from './admin/passManagement';
import UserManagement from './admin/userManagement';
import PassAccepted from './admin/passAccepted';
import ConfirmPassword from './passwordchange/confirmPassword';
import PasswordResetReq from './passwordchange/passwordResetReq';
import User from './user/user';
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
	  				<Route path="/userportal/:id"><User /></Route>
                    <Route path="/confirmpassword"><ConfirmPassword /> </Route>
                    <Route path="/passwordResetReq"><PasswordResetReq /></Route> 
	  			</Switch>
	  		</div>
	  	</Router>
  );
}

export default App;
