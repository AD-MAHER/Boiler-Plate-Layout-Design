import React from 'react'
import { Layout } from 'antd';
import { HeaderTheme } from './HeaderStyles';
import '../Layout.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

export default function Header1() {
    return (
        <>
            <HeaderTheme>
                <Header className="Border" style={{ position: 'fixed', zIndex: 1000, minWidth: '100vw' }} >

                    <Avatar icon={<UserOutlined />} style={{ float: 'right', marginTop: '13px' }}>
                        Click
                    </Avatar>
                    <Title level={2} style={{ color: 'white', marginTop: '12px' }} breakpoint="sm">
                        Zeronsec
                    </Title>

                </Header>
            </HeaderTheme>
        </>
    )
}
