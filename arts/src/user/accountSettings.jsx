import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./../index.css";

const { Header, Content, Sider } = Layout;

function AccountSettings(){
	
	let params = useParams();
	let id = params.id;
	
	return(
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
				  defaultSelectedKeys={['3']}
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
				  <Button type="primary" href="/">Confirm Email</Button>
					<br />
				  <Button type="primary" href="/changePassword">Change Password</Button>
					<br />
				  <Button type="primary" href="/">Upload documents</Button>
					<br />
				</Content>
			  </Layout>
			</Layout>
		  </Layout>
	);
}

export default AccountSettings;