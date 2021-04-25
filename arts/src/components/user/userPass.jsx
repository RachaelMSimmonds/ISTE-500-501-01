import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Cookies from 'js-cookie'
import { Link, useHistory, useLocation } from "react-router-dom";
import { setUserSession, getUserSession } from '../services/Common';
import { useParams } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { Table } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const { Header, Content, Sider } = Layout;

//wireframe 9
function UserPasses(){
	
	let params = useParams();
	let id = params.id;

	let history = useHistory();
	let location = useLocation();
	const {REACT_APP_API_URL, REACT_APP_PUBLIC_URL} = process.env;
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [passesData, setData] = useState(null);

	useEffect(() => { // tells component to do something after render.
		const getPasses = async () => {
			console.log(Cookies.get('user'));
			const user = JSON.parse(Cookies.get('user'));
			console.log(user.username)
			axios.post(REACT_APP_API_URL+'/pass', { username: user.username })
			.then(response => {
				console.log(JSON.stringify(response.data));
				setData(JSON.stringify(response.data));
				// return JSON.stringify(response.data);
			}).catch(error => {
					
				if (!error.response){
					console.log(error);
				} else{
					setLoading(false);
					if (error.response.status === 401){
						setError(error.response.data.message);
					}
					else setError("Something went wrong. Please try again later.");
				}
			});
		}
		getPasses();
	}, []);
	
	const tabcolumns = [
		{
			title: 'Pass',
			dataIndex: 'passTypeName',
			key: 'passTypeName',
		},
		{
			title: 'Date Acquired',
			dataIndex: 'dateCreated',
			key: 'dateCreated',
		},
		{
			title: 'Expiration date',
			dataIndex: 'dateExpires',
			key: 'dateExpires',
		}
	]
		
	
	
	return (
		<Layout>
			<Header className="header">
			  <div className="logo" />
			  <Menu theme="dark" mode="horizontal">
			  </Menu>
			</Header>
			<Layout>
			  <Sider width={200} className="site-layout-background">
				<Menu
				  mode="inline"
				  defaultSelectedKeys={['1']}
				  defaultOpenKeys={['sub1']}
				  style={{ height: '100%', borderRight: 0 }}
				>
				 	<Menu.Item key="1"><Link to={"/userportal/userpass/"+id}>My Passes</Link></Menu.Item>
					<Menu.Item key="2"><Link to={"/userportal/passstore/"+id}>Availible Passes</Link></Menu.Item>
					<Menu.Item key="3"><Link to={"/userportal/accountsettings/"+id}>Account Settings</Link></Menu.Item>
				</Menu>
			  </Sider>
			  <Layout style={{ padding: '0 24px 24px' }}>
				<Content
				  className="site-layout-background"
				  style={{
					padding: 24,
					margin: 0,
					minHeight: 280,
				  }}
				>
					{passesData}
					<Table dataSource={passesData} columns={tabcolumns}></Table>
				</Content>
			  </Layout>
			</Layout>
		  </Layout>
	);
}

export default UserPasses;