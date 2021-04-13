import React from "react";
import { removeUserSession, getUser } from '../services/Common';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { OmitProps } from "antd/lib/transfer/ListBody";


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

function NavBar(){
    
    
    
    return (
        <div>
            < AuthButton />
        </div>
    );
}

export default NavBar;