import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`

.ant-picker-panel-container{
            background-color:${(props) => props.theme.background};
            Border:1px solid color:${(props) => props.theme.color};
  }

  .ant-picker-header{
      color:${(props) => props.theme.color};
  }
  .ant-picker-content th, .ant-picker-content td{
      color:${(props) => props.theme.color};
  }
  .ant-picker-header > button{
      color:${(props) => props.theme.background};
  }
  .ant-picker-time-panel-column > li.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner{
      color:${(props) => props.theme.color};
      background-color: ${(props) => props.theme.background};
      :hover{
          color:blue;
      }
  }
  .ant-picker-input > input{
  color: ${(props) => props.theme.background};
} 

.ant-picker-suffix{
      color:  ${(props) => props.theme.background};
    
  }

  .ant-radio-wrapper{
    color:${props => props.theme.color};
   }
  `;