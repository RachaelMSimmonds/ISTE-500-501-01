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
} from 'antd';
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import "./../index.css";

//wireframe 15
function PassApp2(){
	let params = useParams();
	let id = params.id;
	
	return(<div></div>);
}

export default PassApp2;