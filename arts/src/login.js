import React from "react";
import ReactDOM from "react-dom";
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./index.css";

class Login extends React.Component{
	render(){
	return(
		<div className = "Login">
			<Input placeholder = "Username" />
			<Input.password placeholder = "Password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
		</div>
	);
}
};

export default Login;