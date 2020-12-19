import styled from 'styled-components';
export const TableTheme = styled.div` 

.ant-table-cell{
    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};
}

.ant-table-selection-column{
    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};

}

.ant-table-selection-row{
    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};

}

.ant-checkbox-wrapper{
    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};
}

::selection{
    color:yellow;
    background:red;
}
.ant-table-tbody > tr.ant-checkbox-wrapper-checked> td {
    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};

}

.editable-row{
    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};
}

.editable-cell-value-wrap{

    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};
}
.ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};

.ant-table-tbody > tr.ant-table-row-selected > td {
    background: ${props => props.theme.background};
    color : ${props => props.theme.color};
}

#components-table-demo-resizable-column .react-resizable {
  position: relative;
  background-clip: padding-box;
}

#components-table-demo-resizable-column .react-resizable-handle {
  position: absolute;
  right: -5px;
  bottom: 0;
  z-index: 1;
  width: 10px;
  height: 100%;
  cursor: col-resize;
}



`;
