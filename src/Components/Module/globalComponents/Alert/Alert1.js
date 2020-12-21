import React, { Component } from 'react'
import { Alert } from 'antd';
export default class Alert1 extends Component {
    render() {
        return (
            <>
            <Alert message="success" type= {this.props.success} showIcon />
            <Alert message="info"  type={this.props.info} showIcon />
            <Alert message="warning" type= {this.props.warning} showIcon closable />
            <Alert message="error" type=  {this.props.error} showIcon />
            <Alert
              message="Success Tips"
              description={this.props.successdis}
              type={this.props.successtips} 
              showIcon
            />
            <Alert
              message="Informational Notes"
              description={this.props.infodis}
              type={this.props.infotips} 
              showIcon
            />
            <Alert
              message="Warning"
              description={this.props.warningdis}
              type={this.props.warningtips} 
              showIcon
              closable
            />
            <Alert
              message="Error"
              description={this.props.errrodis}
              type={this.props.errortips} 
              showIcon
            />
          </>
        )
    };
}




