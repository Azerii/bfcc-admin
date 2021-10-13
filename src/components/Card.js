import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
position:relative;
width:559px;
height:228px; 
// @media(max-width:1366px){
//     width:520px;
    
// }
border-radius:16px;
background-color:white;
padding:24px;
display:flex;
flex-direction:column;
position:relative;
h4{
    color:var(--primary);
    font-size:24px;
}
.last{
    justify-self:flex-end;
    font-size:36px;
    position:absolute;
    bottom:25px;
}
`
const Card = (props)=>(
<Wrapper>
     <h4>Total number of tests taken</h4>
     <p>in the last 30 days</p>
     <p className="last">0</p>
  {props.children}
</Wrapper>
)
export default Card;