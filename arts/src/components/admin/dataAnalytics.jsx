import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {Layout, Menu, Table, Card, Col, Row, Statistic, Button} from "antd";
import AdminSidebar from '../navigation/admSidebar';
import {
  DesktopOutlined,
  PieChartOutlined,
  ClusterOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import { Pie } from 'ant-design-pro/lib/Charts';
import { Typography, Select } from 'antd';

const { Title } = Typography;

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

const analyticOptions = [
  {
    code: 'age',
    name: 'age',
  },
  {
    code: 'race',
    name: 'race',
  },
  {
    code: 'gender',
    name: 'gender',
  },
]

const ageAnalytics = [
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

const raceAnalytics = [
  {
    x: 'White/Caucasian',
    y: 4544,
  },
  {
    x: 'Hispanic',
    y: 3321,
  },
  {
    x: 'Black/African American',
    y: 3113,
  },
  {
    x: 'Asian',
    y: 2341,
  },
  {
    x: 'Native American',
    y: 1231,
  },
  {
    x: 'Pacific Islander',
    y: 1231,
  },
  {
    x: 'Other',
    y: 121,
  },
];

const genderAnalytics = [
  {
    x: 'Female',
    y: 4544,
  },
  {
    x: 'Male',
    y: 3321,
  },
  {
    x: 'Transgender',
    y: 3113,
  },
  {
    x: 'Non-Binary',
    y: 3113,
  },
  {
    x: 'Other',
    y: 2341,
  },
];

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

//wireframe 19
function DataAnalytics(){
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
            <Title>Data Analytics</Title>
              <Pie
                hasLegend
                title="Age Data Analytics"
                subTitle="Age Data Analytics"
                total={() => (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: (ageAnalytics.reduce((pre, now) => now.y + pre, 0)),
                    }}
                  />
                )}
                data={ageAnalytics}
                //valueFormat={val => <span dangerouslySetInnerHTML={{ __html: (val) }} />}
                height={500}
              />
              <Title level={4}>Select which data you would like to view: </Title>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="age">Age</Option>
                <Option value="race">Race</Option>
                <Option value="gender">Gender</Option>
              </Select>,
              <br></br>
              <br></br>
              <br></br>
                <Button type="primary">
                  DOWNLOAD REPORT
                </Button>
              
                <Button type="primary" danger>
                  RESET
                </Button>

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