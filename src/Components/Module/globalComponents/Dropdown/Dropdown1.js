import React, { Component } from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';



export default class Dropdown1 extends Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item>
                
                 {this.props.user1}
                
              </Menu.Item>
              <Menu.Item>
              {this.props.user2}
               
              </Menu.Item>
              <Menu.Item>
              {this.props.user3}
               
              </Menu.Item>
              </Menu>
              );
        return (
            <>
                <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Select User <DownOutlined />
    </a>
  </Dropdown>
            </>
        )
    }
}
