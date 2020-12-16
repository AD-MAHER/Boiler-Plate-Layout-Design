import React from 'react';

import {NavLink} from "react-router-dom";
import {Breadcrumb} from 'antd'
function Register (){
   
    return(
        <>
   
                <Breadcrumb >
                    <Breadcrumb.Item >
                            <NavLink to="/" >  Home </NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                             Register
                     </Breadcrumb.Item>
                 </Breadcrumb>
              
               

        </>
    )
}

export default Register;