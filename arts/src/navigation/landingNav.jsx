import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./../index.css";

function LandingNav(){
	return(<div>
			<nav>
	  			<ul>
	  				<li><Link to="/login">Login</Link> </li>
					<li><Link to="/registration">Sign Up</Link> </li>
					<li><Link to="/adminRegistration">Join as Organization</Link></li>
	  			</ul>
	  		</nav>
		</div>);
}

export default LandingNav;