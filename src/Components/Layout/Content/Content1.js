import React from 'react'
import { Layout } from 'antd';
import { ContentTheme } from './ContentStyle';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Module/Pages/Sidebar_Pages/Home';
import Desk from '../../Module/Pages/Sidebar_Pages/Desk/Desk';
import Login from '../../Module/Pages/Sidebar_Pages/Login';
import Register from '../../Module/Pages/Sidebar_Pages/Register/Register';
import Table1 from '../../Module/Pages/Sidebar_Pages/Table/Table1';
import Files from '../../Module/Pages/Sidebar_Pages/Files';
import "../Layout.css"

const { Content } = Layout;

export default function Content1() {
    return (
        <>


            <ContentTheme>
                <Content className="Border " style={{minHeight:'100vh' , maxHeight:'100vh'}}>

                    <Switch defaultSelectedKeys={['/']} className='active ant-select'>

                        <Route path='/' key="Home" exact component={Home} />
                        <Route path='/register'  key="Register" exact component={Register} />
                        <Route path='/login'  key="Login" component={Login} />
                        <Route path='/desk'  key="Desk" component={Desk} />
                        <Route path='/table'  key="Table1" component={Table1} />
                        <Route path='/files'  key="Files" component={Files} />

                    </Switch>
                </Content>
            </ContentTheme>



        </>
    )
}
