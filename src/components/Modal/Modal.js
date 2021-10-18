import React, { useState } from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import Button from "../Button/Button";
import Context from "../Context/Context";
import Form from "../Form/Form";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 3;
  .card {
    margin: auto;
    width: 408px;
    height: 268px;
    border-radius: 16px;
    background-color: white;
    padding: 24px;
    input::placeholder {
      color: var(--grey_1);
    }
    & > h6 {
      font-size: 20px;
      font-size: 500;
    }
    p {
      font-size: 14px;
      margin: 14px 0 32px;
      color: var(--grey_1);
      width: 300px;
    }
    input {
      padding: 16px;
      /* border: 1px solid #efefef; */
      border-radius: 8px;
      margin-bottom: 24px;
      width: 100%;
    }
    button {
      display: inline-block;
      font-weight: 500px;
      margin-top:24px;
    }
    button:nth-child(4) {
      margin-left: 96px;
      margin-right: 24px;
    }
    a{
      margin-left: 96px;
      margin-right: 24px;
    }
  }
`;
const Modal = (props) => {
  const [age, setAge] = useState("");
  return (
    <Wrapper>
      <div className="card">
        <h6>Add age group</h6>
        <p>
          Adding age group is necessary to create a subjects and test question
        </p>
        <Form
          fieldStyle = "shortText"
          type="text"
          placeholder="Add group"
          value={age}
          changeFunc={setAge}
          onChange={(event) => setAge(event.target.value)}
        />
        <Context.Consumer>
          {(context) => (
            <>
            <Link to='/Table'>
              <Button
                text="Save"
                width="120px"
                borderColor="transparent"
                color={age === "" ? "var(--grey_1)" : ""}
                onClick={() =>context.setToggleModal(!context.willModalShow)
              }
              />
              </Link>
              <Button
                text="Cancel"
                width="120px"
                color="white"
                textColor="var(--primary)"
                onClick={() => context.setToggleModal(!context.willModalShow)}
              />
            </>
          )}
        </Context.Consumer>
      </div>
    </Wrapper>
  );
};
export default Modal;
