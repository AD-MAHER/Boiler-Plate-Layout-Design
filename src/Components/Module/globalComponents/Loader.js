import React from 'react'
import { Spin } from 'antd';



export default function Loader() {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    setModalText(props.ContentText);
      
    }, 2000);
    return (
        <div>
           <Spin /> 
        </div>
    )
}





