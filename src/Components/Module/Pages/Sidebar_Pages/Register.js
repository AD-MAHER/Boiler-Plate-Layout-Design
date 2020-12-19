import React from 'react';
import Input1 from '../../globalComponents/FormComp/Input1'
import {NavLink} from "react-router-dom";
import {Breadcrumb} from 'antd'

function Register (){
   
    return(
        <>
   
                <Breadcrumb >
                    <Breadcrumb.Item >
                            <NavLink to="/" key='0' >  Home </NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                             Register
                     </Breadcrumb.Item>
                 </Breadcrumb>
              
               <div>
             
               

              
                  <Input1
                    name="username"
                    label="Username"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter UserName",
                      },
                    ]}
                    Input='<Input>'></Input1>
                  <Input1
                    name="email"
                    label="Email"
                    rules={[
                      {
                        type: "email",
                        message: "Please Enter Valid Email",
                      },
                      {
                        required: true,
                        message: "Please Input Your Email!!!",
                      },
                    ]}
                   
                  />
                  <Input1
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Password",
                      },
                    ]}
                   
                      
                  />
            

               </div>

        </>
    )
}

export default Register;