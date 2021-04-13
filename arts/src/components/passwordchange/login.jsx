import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { setUserSession } from '../services/Common';
import { Input, Space } from 'antd';
import { Form, Button, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import LandingNav from "../navigation/landingNav";
import "antd/dist/antd.css";

function Login(props){

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// handle button click of login form
	const login = (values) => {
			//console.log(values);
			setError(null);
			setLoading(true);
			
			axios.post('http://localhost:5000/user/signin', { username: values.username, password: values.password })
			.then(response => {
				setLoading(false);
				setUserSession(response.data.token, response.data.user);
      			props.history.push('/');
			}).catch(error => {
				
				if (!error.response){
					console.log(error);
				} else{
					setLoading(false);
					if (error.response.status === 401) setError(error.response.data.message);
					else setError("Something went wrong. Please try again later.");
				}
			});
	  }

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
		  login(values);
		};
	  
		const onFinishFailed = (errorInfo) => {
		  console.log('Failed:', errorInfo);
		};
	  
		return (
			<div className = "login" >
				<LandingNav />

				<div>
				<Form
					{...layout}
					name="basic"
					initialValues={{
					remember: true,
					}}
					onFinish={login}
					onFinishFailed={onFinishFailed}>
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
					<Button type="primary" htmlType="submit" disabled={loading} >
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