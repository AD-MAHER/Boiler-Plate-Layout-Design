import React from 'react';
import {Breadcrumb} from 'antd';
import {NavLink} from "react-router-dom";
import Button1 from '../../globalComponents/Button/Button1';


function Login(props){
  
    return (
        <>
                   
                 <Breadcrumb >
                    <Breadcrumb.Item >
                    <NavLink to="/">  Home </NavLink> 
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                           Login
                    </Breadcrumb.Item>
                </Breadcrumb>
             
             <Button1 className="btn-success-solid btn-medium"
        onClick='onClick'
        type='toggle'>
         LOGGED
</Button1>
                
        </>
    )
}
export default Login;