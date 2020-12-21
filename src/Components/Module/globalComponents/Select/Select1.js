import React, { Component } from 'react'
import { Select  } from 'antd';

const { Option } = Select;
let index = 0;

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(value) {
    console.log('search:', value);
}

export default class Select1 extends Component {
    addItem = () => {
        console.log('addItem');
        const { items, name } = this.state;
        this.setState({
          items: [...items, name || `New item ${index++}`],
          name: '',
        });
      };
    render() {
        return (
            <>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                   
                >
                    <Option value={this.props.value1}>{this.props.value1}</Option>
                    <Option value={this.props.value2}>{this.props.value2}</Option>
                    <Option value={this.props.value3}>{this.props.value3}</Option>
                    <Option value={this.props.value4}>{this.props.value4}</Option>
                    <Option value={this.props.value5}>{this.props.value5}</Option>
                    
                </Select>,

            </>
        )
    };
}





