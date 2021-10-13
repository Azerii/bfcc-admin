import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import NothingAdded from '../../components/Modal/NothingAdded'
// import MainInnerWrapper from '../components/MainInnerWrapper';
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
const Question = (props)=> {
    return(
        <>
        <h4>Question</h4>
        {!props.added && <NothingAdded text='question' link='/add-question'/>}
      {props.added && <Wrapper>
        <div className="main">
            <Card/>
            <Card/>
        </div>
        
    </Wrapper>}
    </>
    )
}
export default Question