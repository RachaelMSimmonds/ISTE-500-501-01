import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


function AuthButton(){
    let history = useHistory();
    let auth = useAuth();

    // execute when Sign In button is clicked
    const action = (() => {
        auth.signout(() => history.push("/"))
    });

    return auth.user ? ( // User exists
        <Button type="primary" onClick={action}>Sign out</Button>
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