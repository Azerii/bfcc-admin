import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.color || "white"};
  color: ${(props) => props.textColor || "white"};
  padding: 0 14px;
  font-size: 16px;
  height: ${(props) => (props.bar2 ? "40px" : "20px")};
  display: flex;
  align-items: center;
  font-weight: 700;
  border-radius: 2.26px;
  width: ${(props) => props.num}%;
  margin-bottom: 1.2rem;
`;

const BarRep = ({ text, num, color, textColor, bar2 }) => {
  return (
    <Wrapper bar2={bar2} num={num} color={color} textColor={textColor}>
      {text}
    </Wrapper>
  );
};

export default BarRep;
