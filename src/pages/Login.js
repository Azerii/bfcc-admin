import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Form from "../components/Form/Form";
import Button from "../components/Button/Button"

const Wrapper = styled.div`
  .container {
    margin-top: 1px;
    height: calc(100vh - 73px);
    & > * {
      text-align: center;
    }
    background-color: white;
    h3 {
      padding-top: 118.5px;
    }
    p {
      margin-top: 12px;
      font-size: 14px;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 360px;
      margin: auto;
      margin-top: 48.5px;
      
      & > div + div , button{
        margin-top:2rem;
      }
    }
   
    a {
      color: var(--primary);
    }
  }
`
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Wrapper>
      <Navbar isLogin />
      <div className="container">
        <h3>Sign in</h3>
        <p>Enter email address and password to sign in.</p>
        <form action="/">
          <Form
            name="My form"
            placeholder="Email address"
            type="text"
            fieldStyle="shortText"
          />
          <Form
            name="Password"
            placeholder="Password"
            type="password"
            inputType='password'
            fieldStyle="password"
          />
        <Link to='/'>
          <Button text='Login' width='100%' height='48px' />
        </Link>
        </form>
        <p>
          Forgot password? <Link to="/login">Retrieve it here</Link>
        </p>
      </div>
    </Wrapper>
  );
};
export default Login;
