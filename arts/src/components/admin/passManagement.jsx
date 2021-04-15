import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {Layout, Menu, Icon, Breadcrumb, Button} from "antd";
import AdminSidebar from '../navigation/admSidebar';
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