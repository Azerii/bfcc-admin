import React from 'react';
import styled from 'styled-components';
import search_img from '../../assets/images/Search-search.svg'
const Wrapper = styled.div`
.search_contain{
    display:flex;
    align-items:center;
    width: 258px;
    height: 40px;
    // background:red;
    border: 1px solid #efefef;
    border-radius:4px;
    input{
        background:transparent;
        border:none;
        width:100%;
        margin-right:12.5px;
        font-size:14px;
        ::placeholder{
            color:var(--grey_1);
        }

    }
    img{
        margin-left:12.5px;
        margin-right:10.17px;
    }
}
`
const search = ()=> <>
<Wrapper>
    <div className='search_contain'>
    <img src={search_img} />
    <input placeholder='Search by name'/>
    </div>
</Wrapper>
</>
export default search