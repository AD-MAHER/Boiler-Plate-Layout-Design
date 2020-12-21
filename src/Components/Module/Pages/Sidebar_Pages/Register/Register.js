import React from 'react';
import Input1 from '../../../globalComponents/FormComp/Input1';
import { NavLink } from "react-router-dom";
import { Breadcrumb, Input } from 'antd'
import Form from 'antd/lib/form/Form';
import Button1 from '../../../globalComponents/Button/Button1';
import DatePicker1 from '../../../globalComponents/DatePicker/DatePicker';
import CheckB from '../../../globalComponents/FormComp/CheckB';
import Radio1 from '../../../globalComponents/Radio/Radio1';
import Select1 from '../../../globalComponents/Select/Select1';
import Alert1 from '../../../globalComponents/Alert/Alert1';

function Register() {

  return (
    <>

      <Breadcrumb >
        <Breadcrumb.Item >
          <NavLink to="/" key='0' >  Home </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item >
          Register
                     </Breadcrumb.Item>
      </Breadcrumb>

      <div style={{ width: '50%' , marginLeft:'3%' , marginTop:'5%'}}>

            <h2 className='title1'>Register your details</h2>

        <Form >
          <Input1 name="username" label="Username" rules={[{ required: true, message: 'Username' },
          ]} input={<Input />} />

          <Input1 name="email" label=" Email" rules={[{ required: true, message: 'Email' },
           { type: 'email', message: 'Please enter in this form "abc@xyz.123"' },
          ]} input={<Input />} />
          <Input1 name="password" label="Password" rules={[{ required: true, message: 'Please enter password' }, { type: 'Password' , message:'Please enter strong password'},
          ]} input={<Input.Password />} />

         
          <Input1 name="Date" label="Date"  rules={[{ required: true, message: 'Selecet Your Date' },
          ]} input={<DatePicker1 />} /> 

<Input1 name="Gender" label="Gender"  rules={[{ required: true, message: 'Mandatory' },
          ]} input={<Radio1 rbtn1text="Male" rbtn2text="Female" rbtn3text="Other"  />} />

<Input1 name="City" label="City"  rules={[{ required: true, message: 'Selecet Your City' },
          ]} 
          input={<Select1  value1="Ahmedabad" value2="Rajkot" value3="Junagadh" value4="Porbandar" value5="Jamnagar"/>} /> 

          <Input1 name="Checkbox" label="Privacy & Policy"  rules={[{ required: true, message: 'Mandatory' },
          ]} input={<CheckB  />} /> 

              <Button1 className="btn-warning-solid btn-small"
        onClick={<Alert1 successtips="Success" successdis="You Have Success Fully Submited"/>}
        type='button'>Submit</Button1>
            
          
        </Form>

          
      </div>

    </>
  )
}

export default Register;