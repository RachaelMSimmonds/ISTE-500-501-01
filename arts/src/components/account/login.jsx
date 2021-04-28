import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import ReactDOM from "react-dom";
import { setUserSession } from '../services/Common';
import { Form, Button, Checkbox, Input, Typography, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import "antd/dist/antd.css";

function Login(){

	let history = useHistory();
	let location = useLocation();
	const {REACT_APP_API_URL, REACT_APP_PUBLIC_URL} = process.env;
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const login = (values) => {
		//console.log(REACT_APP_API_URL+'/user/signin');
		
		axios.post(REACT_APP_API_URL+'/user/signin', { username: values.username, password: values.password })
		.then(response => {
			console.log(JSON.stringify(response.data))
			setUserSession(response.data.token, response.data.user);
			history.push('/userportal/1');
		}).catch(error => {
			
			if (!error.response){
				console.log(error);
			} else{
				if (error.response.status === 401){
					setError(error.response.data.message);
				}
				else setError("Something went wrong. Please try again later.");
			}
		});
	}

	// Antd Declarations
	const { Text, Link } = Typography;

	// Layout adjustments
	const layout = {
		labelCol: {
		  span: 8,
		},
		wrapperCol: {
		  span: 16,
		},
	  };

	  // TailLayout adjustments
	  const tailLayout = {
		wrapperCol: {
		  offset: 8,
		  span: 16,
		},
	  }; 

	const onFinish = (values) => {
		// console.log('Success:', values);
		//values.get("username")
		setLoading(true);
		login(values);
	};
	
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};	  
		return (
			
			<div className = "login" >
				<div>
				<Form
					{...layout}
					name="basic"
					initialValues={{
					remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}>

					<Form.Item {...tailLayout}>
							<Text type="danger" strong></Text>
					</Form.Item>

					<Form.Item
					label="Username"
					name="username"
					rules={[
						{
						required: true,
						message: 'Please input your username!',
						},
					]}
					>
					
					<Input />
					</Form.Item>
					
					<Form.Item
					label="Password"
					name="password"
					rules={[
						{
						required: true,
						message: 'Please input your password!',
						},
					]}
					>
					<Input.Password />
					</Form.Item>
			
					<Form.Item {...tailLayout} name="remember" valuePropName="checked">
					<Checkbox>Remember me</Checkbox>
					</Form.Item>
			
					<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit" >
						Submit
					</Button>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Button type="link" href="http://localhost:3000/registration" >
					...or Register here!
					</Button>
					</Form.Item>
				</Form>
				</div>
		  	</div>
		);
	  
	 // ReactDOM.render(<Demo />, mountNode);
	// return(
	// 	<div className = "login">
	// 		<div>
	// 			<Input placeholder = "Username" />
	// 		</div>
	// 		<div>
	// 			<Input.Password placeholder = "Password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
	// 		</div>
	// 	</div>
	// );

}


export default Login;