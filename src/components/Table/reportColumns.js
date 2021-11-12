import React from "react";
import styled from "styled-components";
import MOCK_DATA from "./MOCK_DATA.json";


const Wrapper = styled.div`
  background-color: ${(props) => props.num > 70 ? "#52D858" : props.num > 45 ? "#FFCC00": "#A10000"};
  color: ${(props) => props.textColor || "white"};
  padding: 0 14px;
  font-size: 16px;
  height: 8px;
  display: flex;
  align-items: center;
  font-weight: 700;
  border-radius: 2.26px;
  width: ${(props) => props.num}%;
  margin-bottom: 1.2rem;
`;

const BarRep = ({ text, num, color, textColor, bar }) => {
  return (
    <Wrapper  num={num} color={color} textColor={textColor}>
      {text}
    </Wrapper>
  );
};




export const REPORT_COLUMNS = [
  {
    Header: "Subject",
    accessor: "subject",
    // Cell:({column})=> column.id
  },
  {
    Header: "Performance",
    accessor: "",
    Cell:({row})=> <BarRep color="var(--primary)" num={row.values.score}/>,
    Column:({column})=> <BarRep color="var(--primary)" num="56"/>
  },
  {
    Header: "Score",
    accessor: "score",
  },
  {
    Header: "Total marks",
    accessor: "total",
  },

  {
    Header: "Grade",
    accessor: "",
    Cell: () => { return "A" }
  },
];
