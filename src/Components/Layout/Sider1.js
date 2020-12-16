import React from 'react'
import { Layout , Menu } from 'antd';
 import {NavLink} from 'react-router-dom';
import './Layout.css';
import { AiOutlineUserAdd , AiOutlineLogin , AiOutlineTable , AiOutlineHome} from "react-icons/ai";
import {DesktopOutlined,FileOutlined,} from '@ant-design/icons';

const {  Sider } = Layout;
export default function Sider1() {
    return (
        <>
           
            <Sider  collapsible   className="Border" >
                     
                        <Menu  theme="dark"  defaultSelectedKeys={['0']} mode="inline" style={{minHeight:'100vh'}}>
                        <Menu.Item key="01"   icon={<AiOutlineHome />} >
                          <NavLink to='/home'>Home</NavLink>
                          </Menu.Item>

                          <Menu.Item key="2" icon={<AiOutlineUserAdd />}>
                          <NavLink to='/register'>Register</NavLink>
                          </Menu.Item>
                      
                          <Menu.Item key="3" icon={<AiOutlineLogin />}>
                          <NavLink to='/login'>Log In</NavLink>
                          </Menu.Item>
                          
                          <Menu.Item key="4" icon={<DesktopOutlined />}>
                          <NavLink to='/desk'>Desk</NavLink>
                          </Menu.Item>
                      
                          <Menu.Item key="5" icon={<AiOutlineTable />}>
                          <NavLink to='/table'>Table</NavLink>
                          </Menu.Item>
                      
                          <Menu.Item key="6" icon={<FileOutlined />}>
                          <NavLink to='/files'>Files</NavLink>
                          </Menu.Item>
                        </Menu>
                
            </Sider>
        </>
    )
}
