import React from "react";
import ReactDOM from "react-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./../index.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//wireframe 8
function User(){
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
				  defaultSelectedKeys={['1']}
				  defaultOpenKeys={['sub1']}
				  style={{ height: '100%', borderRight: 0 }}
				>
				 	<Menu.Item key="1">My Passes</Menu.Item>
					<Menu.Item key="1">Availible Passes</Menu.Item>
					<Menu.Item key="1">Account Settings</Menu.Item>
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
				  Content
				</Content>
			  </Layout>
			</Layout>
		  </Layout>
	);
}

export default User;