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
        <>
            <SiderTheme >
                <Sider collapsible   >

                    <Menu theme="dark" className="Border1" defaultSelectedKeys={['']} style={{ minHeight: '100vh' }}>
                        <Menu.Item key="0" icon={<AiOutlineHome />} >
                            <NavLink to='/home'>Home</NavLink>
                        </Menu.Item>

                        <Menu.Item key="1" icon={<AiOutlineUserAdd />}>
                            <NavLink to='/register'>Register</NavLink>
                        </Menu.Item>

                        <Menu.Item key="2" icon={<AiOutlineLogin />}>
                            <NavLink to='/login'>Log In</NavLink>
                        </Menu.Item>

                        <Menu.Item key="3" icon={<DesktopOutlined />}>
                            <NavLink to='/desk'>Desk</NavLink>
                        </Menu.Item>

                        <Menu.Item key="4" icon={<AiOutlineTable />}>
                            <NavLink to='/table'>Table</NavLink>
                        </Menu.Item>

                        <Menu.Item key="5" icon={<FileOutlined />}>
                            <NavLink to='/files'>Files</NavLink>
                        </Menu.Item>
                    </Menu>

                </Sider>
            </SiderTheme>
        </>

    )
}
