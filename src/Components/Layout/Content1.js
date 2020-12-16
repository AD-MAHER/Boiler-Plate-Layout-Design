import React from 'react'
import { Layout } from 'antd';
import './Layout.css';
import Home from '../Module/Pages/Sidebar_Pages/Home';
 import Desk from '../Module/Pages/Sidebar_Pages/Desk';
 import Login from '../Module/Pages/Sidebar_Pages/Login';
 import Register from '../Module/Pages/Sidebar_Pages/Register';
 import Table from '../Module/Pages/Sidebar_Pages/Table';
 import Files from '../Module/Pages/Sidebar_Pages/Files';
 import {Switch , Route, } from 'react-router-dom';
const { Content } = Layout;

export default function Content1() {
    return (
        <>
           
      
                     
                        <Content className="Border">
                       <Switch> 
                       
                             <Route path='/home'   component={Home} />
                           <Route path='/register'  exact component={Register}/>
                           <Route path='/login'   component={Login}/>
                           <Route path='/desk'   component={Desk}/>
                           <Route path='/table'   component={Table}/>
                           <Route path='/files'   component={Files}/> 
                           
       </Switch>
       </Content>
                
        </>
    )
}
