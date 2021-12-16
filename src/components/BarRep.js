import React from "react";
import styled from "styled-components";

const handleColorType = bar => {
  switch (bar) {
    case "bar2":
      return "28px";
    case "bar3":
      return "8px";
    default:
      return "20px";
  }
};

const Wrapper = styled.div`
  background-color: ${(props) => props.color || "white"};
  color: ${(props) => props.textColor || "white"};
  padding: 0 14px;
  font-size: 12px;
  height: ${(props) =>handleColorType(props.bar) };
  display: flex;
  align-items: center;
  font-weight: 700;
  border-radius: 2.26px;
  width: ${(props) => props.num}%;
  margin-bottom: 1.2rem;
`;

const BarRep = ({ text, num, color, textColor, bar }) => {
  return (
    <Wrapper bar={bar} num={num} color={color} textColor={textColor}>
      {text}
    </Wrapper>
  );
};

export default BarRep;
