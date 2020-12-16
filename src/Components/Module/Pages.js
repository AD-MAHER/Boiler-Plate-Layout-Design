import React from 'react'
import Content1 from '../Layout/Content1'
import Footer1 from '../Layout/Footer1'
import Header1 from '../Layout/Header1'
import Sider1 from '../Layout/Sider1'
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

//import 'antd/dist/antd.css';



export default function Pages() {
  return (
    <>

      <BrowserRouter>


        <Layout>
          <Header1 />
        </Layout>



        <Layout>
          <Sider1 />
          <Layout>
            <Content1 >


            </Content1>
            <Footer1 />
          </Layout>
        </Layout>
      </BrowserRouter>




    </>

  )
}
