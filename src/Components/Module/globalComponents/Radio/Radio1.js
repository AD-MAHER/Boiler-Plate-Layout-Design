import React from 'react';
import FormItem from "antd/lib/form/FormItem";
import { Radio } from 'antd';




const Radio1= (props) => {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
       
        setValue(e.target.value);
    };
    return (
        <>
        
        <FormItem name="RadioButton"
        label=""
        rules={[
          {
            required: true,
            message: 'You must Pick Anyone!',
          },
        ]}>
            <Radio.Group onChange={onChange} value={value} buttonStyle="outline">
                    <Radio value={1}>{props.rbtn1text}</Radio>
                    <Radio value={2}>{props.rbtn2text}</Radio>
                    <Radio value={3}>{props.rbtn3text}</Radio>
                    
                
            </Radio.Group>

            </FormItem>
            
        </>
    )
}
export default Radio1;