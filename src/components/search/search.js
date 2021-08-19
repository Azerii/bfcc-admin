import React,{useState} from 'react';
import styled from 'styled-components';
import {search_img,cancel} from '../../assets'
const Wrapper = styled.div`
.search_contain{
    font-family:var(--font_black);
    display:flex;
    align-items:center;
    input{
        background:transparent;
        width: 258px;
        height: 40px;
        border:none;
        padding-left:43px;
        padding-right:1rem;
        font-size:14px;
        border: 1px solid #efefef;
        border-radius:4px;
        margin:0;
        ::placeholder{
            color:var(--grey_1);
        }
        :focus{
            border-color:#003399;
        }

    }
    img{
        height:16px;
        width:20px;
    }
    .search_img{
        margin-right:-30px;
    }
    .cancel{
        margin-left:-30px;
    }
}
`
const Search = ()=>{ 
const [useCancel,setCancel] = useState(false)

return(<Wrapper>
    <div className='search_contain'>
        <img className="search_img" src={search_img} alt="search_img" />
        <input placeholder='Search by name' onClick={()=>setCancel(true)}/> 
        {useCancel && <img className="cancel" src={cancel} alt="cancel" />}
    </div>
</Wrapper>)
}
export default Search