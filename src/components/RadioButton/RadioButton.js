import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: ${(props) => (props.disabled ? "var(--grey_2)" : "black")};
  }

  .container input {
    display: none;
  }

  .checkmark {
    height: 20px;
    width: 20px;
    background-color: ${(props) =>
      props.disabled ? "var(--grey_5)" : "transparent"};
    border: 1px solid var(--grey_5);
    border-radius: 50%;
  }

  .container:hover input ~ .checkmark {
    background-color: ${(props) =>
      props.disabled ? "var(--grey_5)" : "transparent"};
    border: ${(props) =>
      props.disabled
        ? "1.5px solid var(--grey_3)"
        : "1.5px solid var(--primary)"};
  }

  .container input:checked ~ .checkmark {
    background-color: var(--primary);
    border-color: var(--primary);
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
  }
`;

const RadioButton = (props) => (
  <Wrapper {...props}>
    <label className="container">
      {props.text}
      <input
        type="radio"
        name={props.name}
        checked={props.checked}
        value={props.value}
        disabled={props.disabled}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <span class="checkmark flexRow alignCenter justifyCenter"></span>
    </label>
  </Wrapper>
);

export default RadioButton;
