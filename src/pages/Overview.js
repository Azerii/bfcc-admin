import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Card2 from '../components/Card2';
const arr = [
    {name:'Subject per age group'},
    {name:'Subject name'},
    {name:'English Language',number:'12'},
    {name:'Mathematics',number:'12'},
    {name:'Science',number:'9'},
    {name:'Chemistry',number:'3'},
    {name:'Physics',number:'3'},
    {name:'Biology',number:'3'},
]
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
`
const Overview = ()=> {
    return(
        <Wrapper>
            <h4>Overview</h4>
            <div className="main">
                <Card/>
                <Card2 array={arr}/>
            </div>
            <div className="main">
                <Card/>
                <Card/>
            </div>
        </Wrapper>
    )
}
export default Overview