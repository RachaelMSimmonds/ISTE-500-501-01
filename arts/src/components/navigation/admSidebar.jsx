import React from "react";
import { removeUserSession, getUser } from '../services/Common';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ReactDOM from "react-dom";
import {Layout, Menu, PageHeader, Typography, Button} from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    ClusterOutlined,
    SettingOutlined,
  } from "@ant-design/icons"
import "antd/dist/antd.css";
import { OmitProps } from "antd/lib/transfer/ListBody";

function AdminSideBar(){
	/*
    const Link_Object = {
        pathname: "",
		state: { from: '/' }
	}
    */

    const { Sider } = Layout;
    return (
        <Sider >
        
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

          <Menu.Item key="1" icon={<DesktopOutlined />}>
            <Button type="link" href="/adminPortal/:id">Dashboard</Button>    
          </Menu.Item>

          <Menu.Item key="2" icon={<PieChartOutlined />}>
          <Button type="link" href="/adminPortal/:id">Data Analytics</Button> 
          </Menu.Item>

          <Menu.Item key="8" icon={<ClusterOutlined />}>
          <Button type="link" href="/adminPortal/:id">Pass Submissions</Button> 
          </Menu.Item>

          <Menu.Item key="9" icon={<SettingOutlined />}>
          <Button type="link" href="/adminPortal/:id"> User Management</Button>
          </Menu.Item>

        </Menu>
      </Sider>
    );
}

export default AdminSideBar;