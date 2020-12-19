import React from 'react'
import { Layout, Menu } from 'antd';
import { SiderTheme } from './SiderStyle';
import { NavLink } from 'react-router-dom';
import '../Layout.css'
import { AiOutlineUserAdd, AiOutlineLogin, AiOutlineTable, AiOutlineHome } from "react-icons/ai";
import { DesktopOutlined, FileOutlined, } from '@ant-design/icons';

const { Sider } = Layout;
export default function Sider1() {
    return (
        <div>
            <SiderTheme >

                
                    <Sider collapsible >
                        <div className="logo" />
                        <Menu theme="dark"  mode="inline" style={{minHeight:'100vh' }}>
                            <Menu.Item  icon={<AiOutlineHome />} >
                                <NavLink to='/'>Home</NavLink>
                            </Menu.Item>

                            <Menu.Item  icon={<AiOutlineUserAdd />}>
                                <NavLink to='/register'> Register</NavLink>
                            </Menu.Item>

                            <Menu.Item  icon={<AiOutlineLogin />}>
                                <NavLink to='/login' >Log In</NavLink>
                            </Menu.Item>

                            <Menu.Item  icon={<DesktopOutlined />}>
                                <NavLink to='/desk' >Desk</NavLink>
                            </Menu.Item>

                            <Menu.Item  icon={<AiOutlineTable />}>
                                <NavLink to='/table' >Table</NavLink>
                            </Menu.Item>

                            <Menu.Item  icon={<FileOutlined />}>
                                <NavLink to='/files' key="5">Files</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                
            </SiderTheme>
        </div>

    )
}
