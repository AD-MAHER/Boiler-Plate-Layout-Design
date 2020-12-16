import React from 'react';

import {Breadcrumb} from 'antd';
import {NavLink} from "react-router-dom";

export default function Desk() {
    
    return (
        <>
         
                <Breadcrumb>
                    <Breadcrumb.Item >
                    <NavLink to="/" >  Home </NavLink> 
                    </Breadcrumb.Item> 
                    <Breadcrumb.Item >
                         Desk
                    </Breadcrumb.Item>
                </Breadcrumb>
               
               
        </>
    )
};

