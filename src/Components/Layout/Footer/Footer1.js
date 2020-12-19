import React from 'react'
import { Layout  } from 'antd';
import '../Layout.css';
import { FooterTheme } from './FooterStyle';

const { Footer } = Layout;
const NewYear = new Date().getFullYear();


export default function Footer1() {
    return (
        <>
            <FooterTheme>
                <Footer className="Border">
                
                    CopyRight {NewYear} Created by Zeronsec
                      
                </Footer>
            </FooterTheme>
        </>
    )
}
