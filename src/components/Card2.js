import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  // height: 360px;
  border-radius: 16px;
  background-color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }

  > h4 {
    color: var(--primary);
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 2.4rem;
  }

  p:nth-child(2) {
    font-size: 14px;
  }

  p + p {
    margin-top: 22px;
  }

  p:first-child + p:nth-child(2) {
    margin-top: 12px;
  }
`;

const Card2 = (props) => (
  <Wrapper className={props.className}>
    <h4>Age groups per subject</h4>
    {props.array.map((arr, inKey) => (
      <p key={inKey}>
        {arr.name} <span>{arr.number}</span>
      </p>
    ))}
  </Wrapper>
);

export default Card2;
