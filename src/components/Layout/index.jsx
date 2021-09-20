import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
const Wrapper = styled.div` 
display:flex;
main{
  padding:25px;
  width:calc(100vw - 250px);
  height:calc(100vh - 73px);
  overflow-y:auto;

  // flex:1;
}
`
const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <Wrapper>
        <Sidebar/>
        <main>{children}</main>
      </Wrapper>
    </>
  );
};

export default Layout;
