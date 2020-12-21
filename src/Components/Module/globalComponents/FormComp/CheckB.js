  
import React from 'react'
import {Checkbox} from 'antd';
import FormItem from "antd/lib/form/FormItem";


const CheckB= (props) => {

    
    return (
        <>
        <FormItem name="Check"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Its Mandatory'),
          },
        ]} >
            
                    <Checkbox >{props.CheckName}</Checkbox> 
          
                </FormItem>
        
            
        </>
    )
}
export default CheckB;