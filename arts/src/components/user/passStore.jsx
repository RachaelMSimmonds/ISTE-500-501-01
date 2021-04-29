import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const { Header, Content, Sider } = Layout;

//wireframe 10
function PassStore(){
	
	let params = useParams();
	let id = params.id;
	
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
	];
	
	const dataSource= [
		{
			passTypeName: 'Muesam',
			dateCreated: 'march 5',
			dateExpires 'july 17',
		},
		{
			passTypeName: 'Cruise',
			dateCreated: 'march 27',
			dateExpires 'august 19',
		},
		{
			passTypeName: 'Gallery',
			dateCreated: 'march 16',
			dateExpires 'august 3',
		},
		{
			passTypeName: 'Fireworks',
			dateCreated: 'march 19',
			dateExpires 'june 9',
		}
	];
	
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
				  defaultSelectedKeys={['2']}
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
				  Landing page for the pass store
					<Table dataSource={dataSource} columns={tabcolumns}/>
				</Content>
			  </Layout>
			</Layout>
		  </Layout>
	);
}

export default PassStore;