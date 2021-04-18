import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import AdminSidebar from '../navigation/admSidebar';
import {Layout, Menu, Icon, Breadcrumb, Button} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  ClusterOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import { Typography } from 'antd';
import { Table, Tag, Space } from 'antd';


const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const columns = [
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Last Activity',
    dataIndex: 'activity',
    key: 'activity',
  },
  {
    title: 'Action(s)',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Edit {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const userData = [
  {
    key: '1',
    role: 'User',
    name: 'John Brown',
    status: 'Accepted',
    activity: 'Mar 7, 2021 11:34 AM'
  },
  {
    key: '2',
    role: 'User',
    name: 'Jim Green',
    status: 'Denied',
    activity: 'Apr 4, 2021 08:34 AM'
  },
  {
    key: '3',
    role: 'Partner',
    name: 'Joe Black',
    status: 'Pending',
    activity: 'Feb 17, 2021 04:23 PM'
  },
  {
    key: '4',
    role: 'User',
    name: 'Nathan Kaufman',
    status: 'Accepted',
    activity: 'Mar 17, 2021 12:23 PM'
  },
  {
    key: '5',
    role: 'Partner',
    name: 'Jack Old',
    status: 'Pending',
    activity: 'Jan 17, 2021 5:23 PM'
  },
  {
    key: '6',
    role: 'User',
    name: 'Rachael Simmonds',
    status: 'Denied',
    activity: 'Apr 11, 2021 02:23 PM'
  },
  {
    key: '7',
    role: 'Partner',
    name: 'Nick North',
    status: 'Pending',
    activity: 'Feb 6, 2021 04:23 PM'
  },
  {
    key: '8',
    role: 'User',
    name: 'Vinny Venutolo',
    status: 'Accepted',
    activity: 'Jan 25, 2021 04:23 PM'
  },
  {
    key: '9',
    role: 'User',
    name: 'Sergio Zygmunt',
    status: 'Denied',
    activity: 'Mar 5, 2021 04:23 PM'
  },
];


//wireframe 21
function UserManagement(){
	return(
	<div>
		 <Layout style={{ minHeight: '100vh' }}>
       
        {/* Renders Admin Sidebar component */}
        < AdminSidebar />
        
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Title>User Management</Title> 
            <Button type="primary">Create New User</Button>
            <br></br>
            <br></br>
            <br></br>
            <Table columns={columns} dataSource={userData} />

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        <Sider>
            <div style={{float: 'right'}}>
            <Button>Logout</Button>
        </div>
        </Sider>
      </Layout>
	</div>
	);
}

export default UserManagement;