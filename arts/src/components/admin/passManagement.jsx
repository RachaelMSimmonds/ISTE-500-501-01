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
import { Card } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

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
            <Title>Pass Management</Title>
            <br>
            </br>

            <Title level={4}>Pending Submissions</Title>
            <Card title="Pending Passes" bordered={false} style={{ width: 300, backgroundColor: "grey"  }}>
                <p>Pending User1</p>
                <p>Pending User2</p>
                <p>Pending User3</p>
              </Card>,
                <Button type="primary">
                  MODIFY
                </Button>
              
                <Button type="primary" danger>
                  DELETE
                </Button>
                <br>
              </br>
              <br>
              </br>
            
              <Title level={4}>Accepted Submissions</Title>
              <Card title="Accepted Passes" bordered={false} style={{ width: 300, backgroundColor: "green" }}>
                <p>Accepted User4</p>
                <p>Accepted User5</p>
                <p>Accepted User6</p>
              </Card>,
              <Button type="primary">
                  MODIFY
                </Button>
              
                <Button type="primary" danger>
                  DELETE
                </Button>
                <br>
              </br>
              <br>
              </br>
            


              <Title level={4}>Denied Submissions</Title>
              <Card title="Denied Passes" bordered={false} style={{ width: 300, backgroundColor: "red"  }}>
                <p>Denied User7</p>
                <p>Denied User8</p>
                <p>Denied User9</p>
              </Card>,
              <Button type="primary">
                  MODIFY
                </Button>
              
                <Button type="primary" danger>
                  DELETE
                </Button>
                <br>
              </br>
              <br>
              </br>
            


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