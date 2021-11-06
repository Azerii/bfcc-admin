import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  background-color: white;
  padding: 24px;

  .title {
    color: var(--primary);
    font-size: 24px;
    margin-bottom: 6px;
  }

  .value {
    font-size: 36px;
    line-height: 48px;
    font-weight: 700;
    margin-top: 1.2rem;
  }
`;

const Card = ({ className, value = 0, title, description }) => (
  <Wrapper className={className}>
    <h4 className="title">{title}</h4>
    {/* <p>{description || "in the last 30 days"}</p> */}
    <p className="value">{value}</p>
  </Wrapper>
);

export default Card;
