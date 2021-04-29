import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'antd';
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";

//wireframe 13
function ConfirmationSent(){
	
	return (<div>
			<h1>Your email has been confirmed</h1>
			<Button type='primary' href={'/userportal'}>Home</Button>
		</div>)
}

export default ConfirmationSent;