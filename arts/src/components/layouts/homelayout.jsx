import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { 
	getToken, 
	removeUserSession, 
	getUserSession,
	setUserSession, 
	setErrorSession, 
	getErrorSession } from '../services/Common';

function HomeLayout(){

	return(
		<div>
			<div style={{textAlign:"center"}}>
				<h1>Welcome</h1>
				<br />
				<h2>To view passes, please <Link to="/login">login</Link> or <Link to="/registration">sign up</Link></h2>
			</div>
		</div>
	);
}

export default HomeLayout;