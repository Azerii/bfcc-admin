import React from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import Li from "./Li";
import { chat_pie, age, question, report, subject, test } from "../../assets";
import SidebarSection from "./SidebarSection";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  width: 250px;
  border-right: 1px solid #e5e7eb;
  // margin-top:72px;
  height: calc(100vh);
  color: var(--text);
  ul {
    padding-top: 23px;
    margin-left: 51.33px;
    transition: all 0.5s;
  }
  ul > li + li {
    margin-top: 23px;
  }
`;
const LIST_ARRAY = [
  { color: "#C52CEE", text: "English Language" },
  { color: "#F2B05C", text: "Mathematics" },
  { color: "#0CDAC6", text: "Science" },
  { color: "#52D858", text: "Chemistry" },
  { color: "#F7716E", text: "Physics" },
  { color: "#003399", text: "Biology" },
];
const Sidebar = () => {
  const [items, setItems] = useState(true);

  return (
    <Wrapper>
      <SidebarSection>
        <NavLink activeClassName="active" to="/">
          <SidebarItem text="Overview" active image={chat_pie} />
        </NavLink>
        <NavLink activeClassName="active" to="/reports">
          <SidebarItem text="Reports" image={report} />
        </NavLink>
      </SidebarSection>
      <SidebarSection>
        <NavLink activeClassName="active" to="/agegroup">
          <SidebarItem text="Age group" image={age} />
        </NavLink>
        <NavLink activeClassName="active" to="/subjects">
          <SidebarItem
            text="Subjects"
            onClick={() => setItems(!items)}
            hasPlus
            image={subject}
          />
          {items && (
            <ul>
              {LIST_ARRAY.map((list) => (
                <Li color={list.color} text={list.text} />
              ))}
            </ul>
          )}
        </NavLink>
      </SidebarSection>
      <SidebarSection>
        <NavLink activeClassName="active" to="/question">
            <SidebarItem text="Questions" image={question} />
        </NavLink>
        <NavLink activeClassName="active" to="/test">
            <SidebarItem text="Test" image={test} />
        </NavLink>
      </SidebarSection>
    </Wrapper>
  );
};
export default Sidebar;
