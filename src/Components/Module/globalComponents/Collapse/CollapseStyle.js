import styled from 'styled-components';
export const CollapseStyle = styled.div`
.ant-collapse-content{
            
    background-color:${props => props.theme.background};
    color:${props => props.theme.color};
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header{
    background-color:${props => props.theme.background};
    color:${props => props.theme.color};
}
`;