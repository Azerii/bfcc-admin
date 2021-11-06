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

  .small {
    font-size: 18px;
  }

  & > h4 {
    color: var(--primary);
    font-size: 24px;
    font-size: 700;
    margin-bottom: 2.4rem;
  }

  & > div {
    p,
    h4 {
      text-align: center;
    }

    p {
      font-size: 14px;
    }

    h4 {
      font-size: 20px;
    }

    a {
      color: var(--primary);
    }
  }

  .data {
    width: calc(100% - 48px);
    left: 24px;
  }
`;

const Card3 = (props) => (
  <Wrapper {...props}>
    <h4 className={props.isEmpty ? "" : "small"}>{props.title}</h4>
    <div className="data">{props.children}</div>
  </Wrapper>
);

export default Card3;
