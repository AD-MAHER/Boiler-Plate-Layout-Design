import React from 'react'
import { Layout } from 'antd';
import './Layout.css';

const { Footer } = Layout;
const NewYear = new Date().getFullYear();
export default function Footer1() {
    return (
        <>
            <Footer>
                      CopyRight {NewYear} Created by Zeronsec
            </Footer>
        </>
    )
}
