import React from 'react';

import {Breadcrumb} from 'antd';
import {NavLink} from "react-router-dom";
import Collapse1 from '../../../globalComponents/Collapse/Collapse1';

export default function Desk(props) {
    
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
               
               <Collapse1 value1="right" text1="
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world." header1="Hello"

  text2="
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world." header2="Welcome"

  text3="
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world." header3="Hi"
  />
        </>
    )
};

