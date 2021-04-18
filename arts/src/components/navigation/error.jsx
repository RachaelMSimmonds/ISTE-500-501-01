import React from "react";
import ReactDOM from "react-dom";
import { getToken, removeUserSession, setUserSession, getErrorSession } from '../services/Common'
import "antd/dist/antd.css";

function AccessError(){
	return (
		<div></div>
	);
}

export default AccessError;