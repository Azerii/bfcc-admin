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
position:relative;
& > h4{
    color:var(--primary);
    font-size:24px;
    font-size:700;
}
& > div{
    margin:auto;
    width:257px;
    p,h4{
        text-align:center;
    }
    p{
        font-size:14px;
    }
    h4{
        font-size:20px;
    }
    a{
        color:var(--primary);
    }
}
`
const Card3 = (props)=>(
<Wrapper>
     <h4>{props.title}</h4>
     <div>
        {props.children}
     </div>
</Wrapper>
)
export default Card3;