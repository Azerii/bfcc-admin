import React from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import { chat_pie, question, report } from "../../assets";
import SidebarSection from "./SidebarSection";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  background-color: white;
  width: 250px;
  border-right: 1px solid #e5e7eb;
  height: calc(100vh - 73px);
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

// const LIST_ARRAY = [
//   { color: "#C52CEE", text: "English Language" },
//   { color: "#F2B05C", text: "Mathematics" },
//   { color: "#0CDAC6", text: "Science" },
// ];

const Sidebar = () => {
  const [items, setItems] = useState(true);

  return (
    <Wrapper>
      <SidebarSection>
        <NavLink exact activeClassName="active" to="/">
          <SidebarItem text="Overview" active image={chat_pie} />
        </NavLink>
        <NavLink exact activeClassName="active" to="/reports">
          <SidebarItem text="Reports" image={report} />
        </NavLink>
      </SidebarSection>
      {/* <SidebarSection>
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
      </SidebarSection> */}
      <SidebarSection>
        <NavLink exact activeClassName="active" to="/questions">
          <SidebarItem text="Questions" image={question} />
        </NavLink>
        {/* <NavLink activeClassName="active" to="/test">
          <SidebarItem text="Test" image={test} />
        </NavLink> */}
      </SidebarSection>
    </Wrapper>
  );
};
export default Sidebar;
