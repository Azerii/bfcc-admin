import React from 'react';
import Form from '../Form/Form';
import styled from 'styled-components';
const Wrapper = styled.div`
background-color:white;
margin-top:0.5rem;
& > div{
    width:102px;
    margin-left:auto;
    height:40px;
    z-index:8
}

`
const GlobalFilter = ({filter,setFilter})=>{
    return(
        <Wrapper>
            {/* Search:{''} */}
            <Form 
            fieldStyle='shortText'
            value={filter || ''}
            placeholder='Filter'
            changeFunc={setFilter}
            />

        </Wrapper>
    )
}
export default GlobalFilter ;