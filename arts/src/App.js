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
import Login from './login.jsx';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
    	<Router>
	  		<div>
	  			<ul>
	  				<li><Link to="/login">Login</Link> </li>
	  			</ul>
	  			<Switch>
	  				<Route path="/login" exact Component = { Login }/>
	  			</Switch>
	  		</div>
	  	</Router>
	  </div>
  );
}

export default App;
