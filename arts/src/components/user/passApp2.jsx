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

//wireframe 15
function PassApp2(){
	
	
	return(<div>
			<Button type='primary'>Upload Document</Button>
			<br />
			<Button type='link' href={'/userportal'}>Submit</Button>
		</div>);
}

export default PassApp2;