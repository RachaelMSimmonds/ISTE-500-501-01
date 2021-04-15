import React from "react";
import ReactDOM from "react-dom";
import {Input, Button} from 'antd';
import "antd/dist/antd.css";

//wireframe 7
function ConfirmPassword(){
    
	const {API_URL , PUBLIC_URL} = process.env;
	
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
            <h1 style={{paddingLeft: 500}}>Thank You for Changing Your Password</h1>
            <Button type="primary" href={"http://" + {API_URL} + "/login"}>
                Login!
            </Button>
        </div>);
}

export default ConfirmPassword;