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
import logo from './logo.svg';
import './App.css';


function App(){
  return (
    	<Router>
	  		<div>
	  			<nav>
	  				<ul>
	  					<li><Link to="/login">Login</Link> </li>
	  				</ul>
	  			</nav>
	  			<Switch>
	  				<Route path="/login"><Login /></Route>
	  			</Switch>
	  		</div>
	  	</Router>
  );
}

export default App;
