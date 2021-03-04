import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";

function Landing(){
	return(
		<div style={{textAlign:"center"}}>
			<h1>Welcome</h1>
			<br />
			<h2>To view passes, please <Link to="/login">login</Link> or <Link to="/registration">sign up</Link></h2>
		</div>
	);
}

export default Landing;