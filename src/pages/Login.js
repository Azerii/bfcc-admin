import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
const Wrapper = styled.div` 
.container{
    margin-top:1px;
    height: calc(100vh - 73px);
    & > *{
        text-align:center;
    }
    background-color:white;
    h3{
        padding-top:118.5px;
    }
    p{
        margin-top:12px;
        font-size:14px;
        }
    form{
        display:flex;
        flex-direction:column;
        width:360px;
        margin:auto;
        margin-top:48.5px;
    }
    input{
        height: 48px;
        border-radius:4px;
        border: 1px solid var(--primary);
        padding:16px;
    }
    input:nth-child(2){
        margin:24px 0 48px;
    }
    input:last-child{
        background-color:var(--primary);
        margin-buttom:24px;
        color: white;
    }
    a{
        color:var(--primary);
    }
}
`
const Login = ()=>(
    <Wrapper>
        <Navbar isLogin/>
        <div className='container'>
            <h3>Sign in</h3>
            <p>Enter email address and password to sign in.</p>
            <form action="/">
                <input type="text" placeholder='jackson.graham@gmail.com' />
                <input type="password" />
                <input type="submit" value="Login" />
            </form>
            <p>Forgot password? <Link to="/login">Retrieve it here</Link></p>

        </div>
        d = document.createElemnt
        d.textContent = 
    </Wrapper>
)
export default Login;