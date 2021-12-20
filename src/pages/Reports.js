import React from "react";
import styled from "styled-components";
import PaginationTable from "../components/Table/PaginationTable";
import MOCK_DATA from "../assets/json/MOCK_DATA.json";


const Wrapper = styled.div``;

const Reports = () => {
  return (
    <Wrapper>
      <PaginationTable DATA={MOCK_DATA} title="Reports" />
    </Wrapper>
  );
};
export default Reports;
