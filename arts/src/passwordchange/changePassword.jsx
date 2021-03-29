import React from "react";
import ReactDOM from "react-dom";
import {Input, Form, Button, Tooltip} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import LandingNav from "../navigation/landingNav";

import "./../index.css";

//wireframe 6
function ChangePassword(){
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
	const [form] = Form.useForm();


    return ( 
        <div >
            <LandingNav />
            <h1 style={{paddingLeft: 500}}>Please Enter New Password</h1>
            <div style={{paddingRight: 500}}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="ChangePass"
                    onFinish={onFinish}
                    >
                <Form.Item
                    name="New Password"
                    label={
                        <span>
                            New Password&nbsp;
                            <Tooltip title="Enter a new Password.">
                            <QuestionCircleOutlined />
                            </Tooltip>
                        </span>
                        }
                    rules={[
                        {
                            required: true,
                            message: 'Please input your new password!',
                            whiteSpace: true,
                        },
                        ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="Confrim Password"
                    label={
                        <span>
                            Confirm Password&nbsp;
                            <Tooltip title="Please input your new password again.">
                            <QuestionCircleOutlined />
                            </Tooltip>
                        </span>
                    }
                    rules={[
                            {
                            required: true,
                            message: 'Please input your new password again!',
                            whitespace: true,
                            },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
						Submit
					</Button>
                </Form.Item>
                </Form>
                
              </div>    
          </div>
      )
}

export default ChangePassword;