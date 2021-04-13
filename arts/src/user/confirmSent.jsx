import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'antd';
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import "./../index.css";

//wireframe 13
function ConfirmationSent(){
	let params = useParams();
	let id = params.id;
	return (<div>
			<h1>Your email has been confirmed</h1>
			<Button type='primary' href={'/userportal/'+id}>Home</Button>
		</div>)
}

export default ConfirmationSent;