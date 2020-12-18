import React from 'react'
import { Layout } from 'antd';
import { HeaderTheme } from './HeaderStyles';
import '../Layout.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Modal1 from '../../Module/globalComponents/Modal/Modal1';


const { Header } = Layout;
const { Title } = Typography;

export default function Header1() {
    return (
        <>
       
            <HeaderTheme>
                <Header className="Border" style={{ position: 'fixed', zIndex: 1000, minWidth: '100vw' , display:'inline' }} >
                
                    
                <div  style={{ float: 'right' }} >
                
                    <Modal1 btnText={<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />} 
                    modalText='Do you want to realy log out ?'  />
                     
                    </div>
                    <Title level={2} style={{ color: 'white', marginTop: '12px' }} breakpoint="sm">
                        Zeronsec
                    </Title>
                    
                </Header>
            </HeaderTheme>
        </>
    )
}
