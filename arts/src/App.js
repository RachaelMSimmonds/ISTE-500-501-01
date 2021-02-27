import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import { Text } from 'react';
import Login from './login.js';
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
	  				<Route path="/login" component={ Login }></Route>
	  			</Switch>
	  		</div>
	  	</Router>
	  </div>
  );
}

export default App;
