import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.li`
display:flex;
align-items:center;
.dot{
    border-radius:50%;
    width:13.33px;
    height:13.33px;
    background-color:${props=>props.color};
    margin-right:15.33px;
} 
`
const Li = ({color,text})=><Wrapper 
color={color}>
    <p className="dot"></p>
    <p className="">{text}</p>
</Wrapper>
export default Li;