import styled from 'styled-components';
export const RegisterTheme = styled.div` 
.ant-layout-content{
background-color: ${props => props.theme.background};
color : ${props => props.theme.color};
}

.ant-breadcrumb-link{
    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};

}
.active{
    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};

} 
.ant-breadcrumb-separator{
    background-color: ${props => props.theme.background};
color : ${props => props.theme.color};
 
}



`;


