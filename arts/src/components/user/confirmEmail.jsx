import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Form,
  Input,
  Tooltip,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "antd/dist/antd.css";

//wireframes 11 &12
function ConfirmEmail(){
	
	let params = useParams();
	let id = params.id;
	const [form] = Form.useForm();
	
	const onFinish = (values) => {
    	console.log('Received values of form: ', values);
		<Redirect to="/userportal/1" />
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
	
	return(<div>
			<Form 
				{...formItemLayout}
				form ={form}
				name="confirmemail"
				onFinish={onFinish}
				scrollToFirstError
				>
				<Form.Item
					name="email"
        			label="Email Address: "
        			rules={[{ required: true, message: 'Please input your email!' }]}
					hasFeedback
      				>
        				<Input />
      			</Form.Item>
				
				<Form.Item
					name="confirm"
        			label="Confirm Email Address: "
					dependencies={['email']}
					hasFeedback
        			rules={[
					  {
						required: true,
						message: 'Please confirm your email!',
					  },
					  ({ getFieldValue }) => ({
						validator(_, value) {
						  if (!value || getFieldValue('email') === value) {
							return Promise.resolve();
						  }
						  return Promise.reject(new Error('The two emails that you entered do not match!'));
						},
					  }),
					]}
      				>
        				<Input />
      			</Form.Item>
				
				<Form.Item>
					<Button type='primary' htmlType='submit' href='/userportal/1'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>);
}

export default ConfirmEmail;