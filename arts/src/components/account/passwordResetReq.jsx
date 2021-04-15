import React from "react";
import ReactDOM from "react-dom";
import {Form, Input, Button} from 'antd';
import "antd/dist/antd.css";


//wireframe 5
function PasswordResetReq(){
	
	const layout = {
		labelCol: {
		  span: 8,
		},
		wrapperCol: {
		  span: 16,
		},
	  };

		const onFinish = (values) => {
		  console.log('Success:', values);
		};
	  const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
      };
	return(
        <div >
            <h1 style={{paddingLeft: 500}}>Please Enter Email to Reset Password</h1>
        <div style={{paddingRight: 500}}>
        <Form
					{...formItemLayout}
					name="basic"
					initialValues={{
					remember: true,
					}}
					onFinish={onFinish}
					>
            <Form.Item
                    label="Email"
					name="Email"
					rules={[
						{
						required: true,
						message: 'Please input your email',
						},
					]}
					>
					<Input />
            
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" >
						Submit
					</Button>
            </Form.Item>
            </Form>
            </div>
		</div>);
}

export default PasswordResetReq;