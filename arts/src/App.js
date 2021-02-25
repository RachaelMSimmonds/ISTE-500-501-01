import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import { Text } from 'react';
import Login from "./login.js";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    	<Router>
	  		<Route path="/login" component ={Login} />
	  	</Router>
	  </div>
  );
}

export default App;
