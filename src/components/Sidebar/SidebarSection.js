import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
display:flex;
flex-direction:column;
// justify-content:space-between;
border-top:1px solid #E5E7EB;
div + div{
    margin-top:24px;
}
padding:24px 0;
height:auto;
`
const SidebarSection = ({children})=><Wrapper>
    {children}
</Wrapper>
export default SidebarSection;