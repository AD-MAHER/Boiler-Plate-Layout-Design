import React from 'react'
import { Layout } from 'antd';
import './Layout.css';
import { Avatar } from 'antd';
import {UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

export default function Header1() {
    return (
        <>
            <Header className="Border" >

                    <Avatar icon={<UserOutlined />} style={{float:'right', marginTop:'13px'}}>
                            Click
                    </Avatar>
                    <Title level={2} style={{color:'white' ,marginTop:'12px'}} breakpoint="sm">
                            Zeronsec
                    </Title>
                    
            </Header>
        </>
    )
}
