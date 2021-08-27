import React from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';
import Li from './Li';
import {chat_pie,age,plus,question,report,subject,test} from '../../assets'
import SidebarSection from './SidebarSection';


const Wrapper = styled.div`
width:250px;
border-right:1px solid #E5E7EB;
// margin-top:72px;
height:calc(100vh );
color: var(--text);
ul{
    padding-top:23px;
    margin-left:51.33px;
}
ul > li + li{
    margin-top:23px;
}
`
const LIST_ARRAY = [
    {color:"#C52CEE",text:"English Language"},
    {color:"#F2B05C",text:"Mathematics"},
    {color:"#0CDAC6",text:"Science"},
    {color:"#52D858",text:"Chemistry"},
    {color:"#F7716E",text:"Physics"},
    {color:"#003399",text:"Biology"},
]
const Sidebar = ()=><Wrapper>
<SidebarSection>
    <SidebarItem text="Overview" active image={chat_pie}/>
    <SidebarItem text="Reports" image={report}/>
</SidebarSection>
<SidebarSection>
    <SidebarItem text="Age group" image={age}/>
    <SidebarItem text="Subjects" hasPlus image={subject}/>
    <ul>
        {LIST_ARRAY.map(
            list =><Li color={list.color} text={list.text}/>
        )}
    </ul>
</SidebarSection>
<SidebarSection>
    <SidebarItem text="Questions" image={question}/>
    <SidebarItem text="Test" image={test}/>
</SidebarSection>
</Wrapper>
export default Sidebar;