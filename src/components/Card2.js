import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
position:relative;
width:365px;
height:360px; 
border-radius:16px;
background-color:white;
padding:24px;
display:flex;
flex-direction:column;

p{
font-size:16px;
display: flex;
justify-content:space-between;
}
p:first-child{
    color:var(--primary);
    display:flex;
    justify-content:space-between;
    font-size:18px;
    font-weight:700;
}
p:nth-child(2){
    font-size:14px;
}
p + p{
    margin-top:22px;
}
p:first-child + p:nth-child(2){
    margin-top:12px;
}
`
const Card2 = (props)=>(
<Wrapper>
     {props.array.map((arr,inKey)=>{
         if(inKey > 1){
            return<p key={inKey}>{arr.name} <span>{arr.number}</span></p>
        }else{
            return<p key={inKey}>{arr.name} </p>
         }
     })}
</Wrapper>
)
export default Card2;