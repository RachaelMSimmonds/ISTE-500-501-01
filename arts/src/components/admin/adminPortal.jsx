import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {Layout, Menu, PageHeader, Typography, Button} from "antd";
import AdminSidebar from '../navigation/admSidebar';
import {
  DesktopOutlined,
  PieChartOutlined,
  ClusterOutlined,
  SettingOutlined,
} from "@ant-design/icons"

const { Header, Content, Footer, Sider } = Layout;
const { Paragraph } = Typography;

// class SiderDemo extends React.Component {
//   state = {
//     collapsed: false,
//   };
//   onCollapse = collapsed => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };
//   render() {
//     const { collapsed } = this.state;
  

//wireframe 18
function AdminPortal(){
  
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
              <PageHeader title="Welcome" className="site-page-header" subTitle="User 1"></PageHeader>
              Dashboard/Homepage for admin. Welcome will go here.
              <Paragraph>
                Ant Design interprets the color system into two levels: a system-level color system and a
                product-level color system.
              </Paragraph>

              <Paragraph>
                Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
                easier for designers to have a clear psychological expectation of color when adjusting colors,
                as well as facilitate communication in teams.
              </Paragraph>
            </div>
          </Content>
          

          
        </Layout>
        <Sider>
            <div style={{float: 'right'}}>
            <Button>Logout</Button>
        </div>
        </Sider>
        
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </div>
    );
  }

export default AdminPortal;