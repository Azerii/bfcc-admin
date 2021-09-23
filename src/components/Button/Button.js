import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.button`
width:${props=> props.width || "144px"};
height: 48px;
color:${props=>props.textColor || "white"};
background-color:${props=>props.color || "var(--primary)"};
border:${props=>props.color ? `1px solid ${ props.borderColor ||'var(--primary)'}`: "none"};
border-radius:8px;
display:flex;
justify-content:center;
align-items:center;
`
const Button = (props)=>{
    const {text,width,color,textColor,borderColor} = props;
return<Wrapper {...props}>
    {text}
</Wrapper>
}
export default Button;