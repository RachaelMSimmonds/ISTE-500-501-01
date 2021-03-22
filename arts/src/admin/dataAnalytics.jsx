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

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

//wireframe 19
function DataAnalytics(){
	return(
	<div>
 <Layout style={{ minHeight: '100vh' }}>
        <Sider >
    
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Button type="link" href="http://localhost:3000/adminPortal/1">Dashboard</Button>    
            </Menu.Item>

            <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Button type="link" href="http://localhost:3000/dataAnalytics/1">Data Analytics</Button> 
            </Menu.Item>

            <Menu.Item key="8" icon={<ClusterOutlined />}>
            <Button type="link" href="http://localhost:3000/passManagement/1">Pass Submissions</Button> 
            </Menu.Item>

            <Menu.Item key="9" icon={<SettingOutlined />}>
            <Button type="link" href="http://localhost:3000/userManagement/1"> User Management</Button>
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

              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Active Users" value={112893} />
                </Col>
                <Col span={12}>
                  <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                  <Button style={{ marginTop: 16 }} type="primary">
                    Recharge
                  </Button>
                </Col>
                <Col span={12}>
                  <Statistic title="Active Users" value={112893} loading />
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                </Col>
                <Col span={12}>
                  <Statistic title="Unmerged" value={93} suffix="/ 100" />
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Card>
                    <Statistic
                      title="Active"
                      value={11.28}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card>
                    <Statistic
                      title="Idle"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowDownOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>
              </Row>

              <Table columns={columns} dataSource={data} onChange={onChange} />

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