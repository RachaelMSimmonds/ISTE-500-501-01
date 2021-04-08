import React from "react";
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
  DatePicker,
} from 'antd';
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";

//wireframe 14
function PassApp1(){
	let params = useParams();
	let id = params.id;
	
	const [form] = Form.useForm();
	
	const onFinish = (values) => {
    	console.log('Received values of form: ', values);
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
			<h1>Pass Requirements Application</h1>
			<h2>Driver's License</h2>
			<Form
				{...formItemLayout}
				form ={form}
				name="confirmemail"
				onFinish={onFinish}
				scrollToFirstError>
				<Form.Item
					name="driver"
        			label="Driver's Name: "
        			rules={[{ required: true, message: 'Please input your name!' }]}
					hasFeedback
					>
					<Input />
				</Form.Item>
				
				<Form.Item
					name="id"
        			label="Driver's ID Number: "
        			rules={[{ required: true, message: 'Please input your id number!' }]}
					hasFeedback
					>
					<Input />
				</Form.Item>
				
				<Form.Item
					name="dob"
        			label="Date of Birth: "
        			rules={[{ required: true, message: 'Please input your Date of birth!' }]}
					hasFeedback
					>
					<DatePicker />
				</Form.Item>
				
				<Form.Item
					name="expiration"
        			label="Expiration Date: "
        			rules={[{ required: true, message: 'Please input your license expiration !' }]}
					hasFeedback
					>
					<DatePicker />
				</Form.Item>
				
				<Form.Item
					name="docnum"
        			label="Document Number: "
        			rules={[{ required: true, message: 'Please input your id number!' }]}
					hasFeedback
					>
					<Input />
				</Form.Item>
				
				<Form.Item
					name="address"
        			label="Address: "
        			rules={[{ required: true, message: 'Please input your address!' }]}
					hasFeedback
					>
					<Input />
				</Form.Item>
				
				<Form.Item
					name="state"
        			label="State (abv): "
        			rules={[{ required: true, message: 'Please input your home state!' }]}
					hasFeedback
					>
					<Input />
				</Form.Item>
				
				<Form.Item
					name="zip"
        			label="Zip Code: "
        			rules={[{ required: true, message: 'Please input your zip code!' }]}
					hasFeedback
					>
					<Input />
				</Form.Item>
				
				<Form.Item>
					<Button type='primary' htmlType='submit' href={'/userportal/accountsettings/passapp2/'+id}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>);
}

export default PassApp1;