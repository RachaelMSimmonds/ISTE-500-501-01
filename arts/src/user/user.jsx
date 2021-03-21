import React from "react";
import ReactDOM from "react-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import "./../index.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//wireframe 8
function User(){
	
	let params = useParams();
	let id = params.id;
//	console.log(id);
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
				 	<Menu.Item key="1"><Link to={"/userportal/userpass/"+id}>My Passes</Link></Menu.Item>
					<Menu.Item key="2"><Link to={"/userportal/passstore/"+id}>Availible Passes</Link></Menu.Item>
					<Menu.Item key="3"><Link to={"/"+id}>Account Settings</Link></Menu.Item>
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
				  Landing page for User
				</Content>
			  </Layout>
			</Layout>
		  </Layout>
	);
}

export default User;