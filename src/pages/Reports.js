import React from "react";
import styled from "styled-components";
import PaginationTable from "../components/Table/PaginationTable";

const Wrapper = styled.div``;

const Reports = () => {
  return (
    <Wrapper>
      <PaginationTable title="Reports" />
    </Wrapper>
  );
};
export default Reports;
