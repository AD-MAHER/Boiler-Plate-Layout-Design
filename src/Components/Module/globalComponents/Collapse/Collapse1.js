import React, { Component  } from 'react'
import { Collapse } from 'antd';
import { CollapseStyle } from './CollapseStyle';


const { Panel } = Collapse;


function callback(key) {
  console.log(key);
}





export default class Collapse1 extends Component {
    state = {
        expandIconPosition: 'left'
      };
  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  render() {
    
    
    const { expandIconPosition } = this.state;
    return (
      <>
      <CollapseStyle>
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel header={this.props.header1} key="1">
            <div>{this.props.text1}</div>
          </Panel>
          <Panel header={this.props.header2} key="2" >
            <div>{this.props.text2}</div>
          </Panel>
          <Panel header={this.props.header3} key="3" >
            <div>{this.props.text3}</div>
          </Panel>
        </Collapse>
        </CollapseStyle>
      </>
    );
  }
}

