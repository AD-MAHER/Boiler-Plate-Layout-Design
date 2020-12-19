import React from 'react'
import Content1 from '../Layout/Content/Content1'
import Footer1 from '../Layout/Footer/Footer1'
import Header1 from '../Layout/Header/Header1'
import Sider1 from '../Layout/Sider/Sider1'
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

//import 'antd/dist/antd.css';



export default function Pages(props) {
  return (
    <>

      <BrowserRouter>


        <Layout>
          <Header1  theme={props.theme} changeTheme={props.changeTheme}/>
        </Layout>



        <Layout style={{ marginTop: '64px' }}>
          <Sider1 />
          <Layout >
            <Content1 >


            </Content1>
            <Footer1 />
          </Layout>
        </Layout>
      </BrowserRouter>




    </>

  )
}
