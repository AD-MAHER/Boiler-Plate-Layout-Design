import React from 'react';
import {Breadcrumb} from 'antd';
import {NavLink} from "react-router-dom";



function Login(){
  
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
               
          

                
        </>
    )
}
export default Login;