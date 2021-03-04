import React from "react";
import ReactDOM from "react-dom";
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./index.css";

function Login(){
	return(
		<div className = "login">
			<div>
			<Input placeholder = "Username" />
			</div>
			<div>
			</div>
		</div>
	);

}

//console.log(Login);

//			<Input placeholder = "Username" />
//			<Input.password placeholder = "Password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />


export default Login;