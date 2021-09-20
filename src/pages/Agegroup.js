import React from 'react';
import styled from 'styled-components';
import { age_group } from '../assets';
const Wrapper = styled.div` 
.main{
    display:flex;
    justify-content:space-between;
    // flex-wrap:wrap;
}
& > h4{
    font-size:24px;
    margin:56px 0 24px;
}
& > p, & > img, & > button{
    display:block;
    text-align:center;
    margin: auto;
}
img{
    margin-top:103px;
    margin-bottom:20.5px;
} 
p:first-child{
    font-size:24px;
}
p:nth-child(2){
    font-size:16px;
    color:var(--primary);
}
`
const Agegroup = ()=> {
    return(
        <Wrapper>
            <h4>Age group</h4>
            <img src={age_group} alt={age_group} />
            <p>There’s nothing here.</p>
            <p>You don’t any age group <br/> added at the monent.</p>
            <button>Add age group</button>
        </Wrapper>
    )
}
export default Agegroup