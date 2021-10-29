import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e5e7eb;
  padding: 24px 0;
  height: auto;

  &:first-child {
    border-top: none;
  }

  a + a {
    margin-top: 24px;
  }

  .active > div {
    color: var(--primary);
  }
`;

const SidebarSection = ({ children }) => <Wrapper>{children}</Wrapper>;

export default SidebarSection;
