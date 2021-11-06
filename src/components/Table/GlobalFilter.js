import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import Form from "../Form/Form";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;

  & > div {
    width: 102px;
    height: 40px;
    margin-left: 2.4rem;
    z-index: 8;
  }
`;

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 100);

  return (
    <Wrapper>
      {/* Search:{''} */}
      <Form
        fieldStyle="shortText"
        value={value || ""}
        placeholder="Filter"
        changeFunc={(e) => {
          setValue(e);
          onChange(e);
        }}
      />
    </Wrapper>
  );
};
export default GlobalFilter;
