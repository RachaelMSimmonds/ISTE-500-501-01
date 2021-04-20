import React from "react";
import { removeUserSession, getUser } from '../services/Common';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ReactDOM from "react-dom";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { OmitProps } from "antd/lib/transfer/ListBody";

function NavBar(){
	/*
    const Link_Object = {
        pathname: "",
		state: { from: '/' }
	}
    */

    return (
    <div>
        <nav>
            <ul>
                <li><Link to={{pathname: "/",state:{from:"/"}}}>Home</Link> </li>
                <li><Link to={{pathname: "/login",state:{from:"/"}}}>Login</Link> </li>
                <li><Link to={{pathname: "/signup",state:{from:"/login"}}}>Sign Up</Link> </li>
                <li><Link to={{pathname: "/adminregistration",state:{from:"/"}}}>Join as Organization</Link></li>
            </ul>
        </nav>
    </div>
    );
}

/*
function AdminNav(){
	return(
		<nav>
			<ul>
			</ul>
		</nav>
	);
}
function AuthButton(){
    
    const user = getUser();

    // execute when Sign In button is clicked
    const logout = (() => {
        removeUserSession();
        history.push('/');
    });

    return auth.user ? ( // User exists
        <Button type="primary" onClick={logout}>Sign out</Button>
    ) : ( // User not exists
        <Button type="primary">Sign In</Button>
    );

}
*/

export default NavBar;