import React from 'react';
import {Breadcrumb} from 'antd';
import {NavLink} from "react-router-dom";
//import Content1 from '../../Content1';

export default function Grids() {
    
    return (
        <>
     
                <Breadcrumb>
                    <Breadcrumb.Item >
                    <NavLink to="/" >  Home </NavLink> 
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                          Grids
                    </Breadcrumb.Item>
                 </Breadcrumb>

         
        </>
        )
}

