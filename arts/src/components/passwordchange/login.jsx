import React from "react";
import ReactDOM from "react-dom";
import { Input, Space } from 'antd';
import { Form, Button, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import LandingNav from "../navigation/landingNav";
import "antd/dist/antd.css";

function Login(){

	// Variable Declarations
	let history = useHistory();
	let location = useLocation();
	let auth = useAuth();

	// Get Pathname State Value
	let { from } = location.state || { from: { pathname: "/"} };

	// login function
	let login = (values) => {
		auth.signin(values.get('username'),values.get('password') = () => {
			history.replace(from);
		});
	};

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
		  values.get("username")
		};
	  
		const onFinishFailed = (errorInfo) => {
		  console.log('Failed:', errorInfo);
		};
	  
		return (
			<div className = "login" >
				<LandingNav />

				<p>Please sign in your account before you access the page at {from.pathname}</p>

				<div>
				<Form
					{...layout}
					name="basic"
					initialValues={{
					remember: true,
					}}
					onFinish={onFinish}
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
					<Button type="primary" htmlType="submit" onClick={login} >
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