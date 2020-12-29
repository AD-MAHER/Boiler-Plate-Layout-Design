import React, {useState} from 'react';
import { Modal } from 'antd';


const Model1 = (props) => {
    const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(props.ContentText);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText(props.handleOkText);
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    setModalText(props.ContentText);
      
    }, 2000);
  };

  const handleCancel = () => {
    
    setVisible(false);
  };



    return(
        <div>

        <p onClick={showModal}>
        {props.btnText}
      </p>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{props.modalText}</p>
      </Modal>

        </div>
    )
}

export default Model1;