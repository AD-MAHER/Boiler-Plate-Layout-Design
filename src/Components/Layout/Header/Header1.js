import React from 'react'
import { Layout , Switch } from 'antd';
import { HeaderTheme } from './HeaderStyles';
import '../Layout.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Modal1 from '../../Module/globalComponents/Modal/Modal1';
import Dropdown1 from '../../Module/globalComponents/Dropdown/Dropdown1';


const { Header } = Layout;
const { Title } = Typography;

export default function Header1(props) {
    return (
        <>
       
            <HeaderTheme>
                <Header className="Border" style={{ position: 'fixed', zIndex: 1000, minWidth: '100vw' , display:'inline' }} >
                
                   
                <div  style={{ float: 'right'  }} >
                
                    <Modal1 btnText={<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />} 
                    modalText='Do you want to realy log out ?'  />
                     
                    </div>
                   
                    <div style={{ float: 'right' , marginRight:"0.5%" }}>
                   <Switch
                    style={{background : ' rgba(145, 170, 180, 0.658)'}}
          checked={props.theme === 'dark'}
          onChange={props.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
                    </div>
                    <div style={{ float: 'right' , marginRight:"0.5%" }}>
                    <Dropdown1 user1 ="Ajay" user2="Milan" user3="Chirag"/>
                </div>
                    <Title level={2} style={{ color: 'white', marginTop: '12px' }} breakpoint="sm">
                        Zeronsec
                    </Title>
                   
                    
                </Header>
            </HeaderTheme>
        </>
    )
}
