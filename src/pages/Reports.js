import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
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
const Reports = ()=> {
    return(
        <Wrapper>
        <h4>Reports</h4>
        <div className="main">
            <Card/>
            <Card/>
        </div>
        
    </Wrapper>
    )
}
export default Reports