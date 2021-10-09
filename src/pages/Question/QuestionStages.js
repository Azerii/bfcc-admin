import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Wrapper = styled.div`
  .container {
    margin-top: 1px;
    height: 100vh;
    & > * {
      text-align: center;
    }
    background-color: white;
    h3 {
      padding-top: 33.5px;
    }
    & > p {
      margin-top: 6px;
      font-size: 16px;
      color:var(--grey_1);
      width:350px;
      margin:auto;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 360px;
      margin: auto;
      margin-top: 48.5px;
    }
    input {
      height: 48px;
      border-radius: 4px;
      border: 1px solid var(--primary);
      padding: 16px;
    }
    input:nth-child(2) {
      margin: 24px 0 48px;
    }
    input:last-child {
      /* background-color: var(--primary); */
      margin-buttom: 24px;
      color: white;
      border:none;
    }
    a {
      color: var(--primary);
    }
  }
  .stages{
    width:738.56px;
    margin:auto;
    padding-top:172px;
    background-color:white;
    display: flex;
    justify-content:space-between;
    p{
      /* margin-top:unset; */
      font-size:16px;
      display:flex;
      align-items:center;
      color:var(--grey_1);
      span + span {
        margin-left:9.19px;
      }
      span:first-child{
        height:36px;
        width:36px;
        background-color:#efefef;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
      }
    }
    .featured{
      color:var(--primary);
      span:first-child{
          color:white;
          background-color:var(--primary);
        }
    }
  }
`;
const QuestionStages = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Wrapper>
      <div className="container">
        <div className='stages'>
          <p className='featured'><span>1</span><span>Subject and class</span></p>
          <p className='featured'><span>2</span><span>Question type</span></p>
          <p className='featured'><span>3</span><span>Add questions</span></p>
        </div>
        <h3>Select subject and class</h3>
        <p>Be sure to select the right subject and class for the question(s) you are about to upload.</p>
        <form action={userName && password && '/'}>
          <input
            type="text"
            placeholder="jackson.graham@gmail.com"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        <Button text='Next' width='auto'/>
        </form>
        <p>
          Forgot password? <Link to="/login">Retrieve it here</Link>
        </p>
      </div>
    </Wrapper>
  );
};
export default QuestionStages;
