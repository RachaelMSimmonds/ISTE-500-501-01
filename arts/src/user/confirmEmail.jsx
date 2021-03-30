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
import "antd/dist/antd.css";
import "./../index.css";

//wireframes 11 &12
function ConfirmEmail(){

	const form = Form.useForm();

	return(<div>
			<Form form ={form}>
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
					dependencies={['password']}
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
			</Form>
		</div>);
}

export default ConfirmEmail;