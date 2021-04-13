import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./../index.css";
import {Layout, Menu, Table, Card, Col, Row, Statistic, Button} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  ClusterOutlined,
  SettingOutlined,
  LikeOutlined,
  ArrowUpOutlined, 
  ArrowDownOutlined
} from "@ant-design/icons"
import Charts from 'ant-design-pro/lib/Charts';
import { Pie, yuan } from 'ant-design-pro/lib/Charts';

const analytics1 = [
  {
    x: 'Age 0-12',
    y: 4544,
  },
  {
    x: 'Age 13-17',
    y: 3321,
  },
  {
    x: 'Age 18-29',
    y: 3113,
  },
  {
    x: 'Age 30-45',
    y: 2341,
  },
  {
    x: 'Age 46-64',
    y: 1231,
  },
  {
    x: 'Age 65+',
    y: 1231,
  },
];

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


//wireframe 19
function DataAnalytics(){
	return(
	<div>
 <Layout style={{ minHeight: '100vh' }}>
        <Sider >
    
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Button type="link" href="/adminPortal/1">Dashboard</Button>    
            </Menu.Item>

            <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Button type="link" href="/dataAnalytics/1">Data Analytics</Button> 
            </Menu.Item>

            <Menu.Item key="8" icon={<ClusterOutlined />}>
            <Button type="link" href="/passManagement/1">Pass Submissions</Button> 
            </Menu.Item>

            <Menu.Item key="9" icon={<SettingOutlined />}>
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
              Data Analytics will be here.
              <Pie
                hasLegend
                title="Age Data Analytics"
                subTitle="Age Data Analytics"
                total={() => (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: (analytics1.reduce((pre, now) => now.y + pre, 0)),
                    }}
                  />
                )}
                data={analytics1}
                //valueFormat={val => <span dangerouslySetInnerHTML={{ __html: (val) }} />}
                height={500}
              />

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
    );

	</div>);
}

export default DataAnalytics;