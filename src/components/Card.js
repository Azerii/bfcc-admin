import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
position: relative;
  width: 100%;
  border-radius: 16px;
  background-color: white;
  padding: 24px;
  min-height:228px;

  .title {
    color: var(--primary);
    font-size: 24px;
    margin-bottom: 6px;
  }

  .value {
    position:absolute;
    font-size: 36px;
    line-height: 48px;
    font-weight: 700;
    bottom:0;
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
