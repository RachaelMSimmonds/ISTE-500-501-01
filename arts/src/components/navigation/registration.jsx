// import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import React, { useState } from 'react';
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
import { QuestionCircleOutlined } from '@ant-design/icons';
import LandingNav from "./landingNav";

function Registration() {

const { Option } = Select;

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

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

// const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="585">585</Option>
      </Select>
    </Form.Item>
  );

    return(
		<div>
			<LandingNav />
        <div style={{paddingRight: 500}}>
            <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
 <Form.Item 
        name="username"
        label={
          <span>
            Username&nbsp;
            <Tooltip title="Enter a username.">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please enter a username!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

<Form.Item 
        name="firstname"
        label={
          <span>
            First Name&nbsp;
            <Tooltip title="Please enter your first name here.">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'First name is required!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name="lastname"
        label={
          <span>
            Last Name&nbsp;
            <Tooltip title="Please enter your last name here.">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Last name is required!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label={
          <span>
            E-mail&nbsp;
            <Tooltip title="Please enter your e-mail here.">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >

        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="address1"
       label={
        <span>
          Primary Address&nbsp;
          <Tooltip title="Enter in Street name ">
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      }
      rules={[
        {
          required: true,
          message: 'Please input your address!',
          whitespace: true,
        },
      ]}
      >
        <Input />
      </Form.Item>

      <div>
      <Form.Item
        name="city1"
       label={
        <span>
          Primary City&nbsp;
          <Tooltip title="Enter in City ">
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      }
      rules={[
        {
          required: true,
          message: 'Please input your city!',
          whitespace: true,
        },
      ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="state1"
       label={
        <span>
          Primary State&nbsp;
          <Tooltip title="Enter in State ">
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      }
      rules={[
        {
          required: true,
          message: 'Please input your state!',
          whitespace: true,
        },
      ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="zip1"
       label={
        <span>
          Primary Zip Code&nbsp;
          <Tooltip title="Enter in Zip code.">
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      }
      rules={[
        {
          required: true,
          message: 'Please input your zip code!',
          whitespace: true,
        },
      ]}
      >
        <Input />
      </Form.Item>
      </div>

      <Form.Item
        name="address2"
       label="Secondary Address"
      rules={[
        {
          required: false,
          message: 'Please input your Street name!',
          whitespace: true,
        },
      ]}
      >
        <Input />
      </Form.Item>

      <div>
      <Form.Item
        name="city2"
       label="Secondary City"
      rules={[
        {
          required: false,
          message: 'Please input your city!',
          whitespace: true,
        },
      ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="state2"
       label="Secondary State"
      rules={[
        {
          required: false,
          message: 'Please input your state!',
          whitespace: true,
        },
      ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="zip2"
       label="Secondary Zip"
      rules={[
        {
          required: false,
          message: 'Please input your zip code!',
          whitespace: true,
        },
      ]}
      >
        <Input />
      </Form.Item>
      </div>

      <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="link" href="http://localhost:3000/adminRegistration">Admin Registration</Button>

      </Form.Item>
    </Form>
  );
  

        </div>
		</div>
    );
    
    }
//}

export default Registration;