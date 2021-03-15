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
	  				<Route path="/adminportal/:id"><AdminPortal /></Route>
	  				<Route path="/userportal/:id"><User /></Route>
	  			</Switch>
	  		</div>
	  	</Router>
  );
}

export default App;
