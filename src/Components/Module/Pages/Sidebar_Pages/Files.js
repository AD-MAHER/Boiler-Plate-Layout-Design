import React from 'react';
import { Breadcrumb } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import {NavLink} from "react-router-dom";


export default function Files() {

    return (
        <>  
            
                <Breadcrumb>
                    <BreadcrumbItem >
                    <NavLink to="/" >  Home </NavLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem >
                             Files
                    </BreadcrumbItem>
                </Breadcrumb>
                
        </>
    )
}
