import React from "react";
import ReactDOM from "react-dom";
import {Input, Button} from 'antd';
import "antd/dist/antd.css";
import LandingNav from "../navigation/landingNav";

//wireframe 7
function ConfirmPassword(){
    const layout = {
		labelCol: {
		  span: 8,
		},
		wrapperCol: {
		  span: 16,
		},
	  };
	  const tailLayout = {
		wrapperCol: {
		  offset: 8,
		  span: 16,
		},
	  };
	  
		const onFinish = (values) => {
		  console.log('Success:', values);
		};

	  
	return(<div>
            <LandingNav />
            <h1 style={{paddingLeft: 500}}>Thank You for Changing Your Password</h1>
            <Button type="primary" href="http://localhost:3000/login">
                Login!
            </Button>
        </div>);
}

export default ConfirmPassword;