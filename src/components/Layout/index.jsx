import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;

  main {
    width: calc(100vw - 250px);
    height: calc(100vh - 73px);
    overflow-y: auto;
    overflow-x: hidden;
    padding: 5.6rem 4.8rem;

    & > h4 {
      font-size: 24px;
      margin: 56px 0 24px;
      line-height: 1;
    }
  }
`;
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <main>{children}</main>
      </Wrapper>
    </>
  );
};

export default Layout;
