import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./../index.css";
import {Layout, Menu, Icon, Breadcrumb, Button} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  ClusterOutlined,
  SettingOutlined,
} from "@ant-design/icons"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

//wireframe 20
function PassManagement(){
	return(
		<div>
			 <Layout style={{ minHeight: '100vh' }}>
        <Sider >
      
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Button type="link" href="/adminPortal/1">Dashboard</Button>    
            </Menu.Item>

            <Menu.Item key="2" icon={<PieChartOutlined />}>
            <Button type="link" href="/dataAnalytics/1">Data Analytics</Button> 
            </Menu.Item>

            <Menu.Item key="1" icon={<ClusterOutlined />}>
            <Button type="link" href="/passManagement/1">Pass Submissions</Button> 
            </Menu.Item>

            <Menu.Item key="2" icon={<SettingOutlined />}>
            <Button type="link" href="/userManagement/1"> User Management</Button>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Pass Management will be here.
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

export default PassManagement;