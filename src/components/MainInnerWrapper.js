import styled from "styled-components";
const Wrapper = styled.div` 
width:calc(100vw - 250px);
overflow:auto;
.slide{
    padding:0 0 0 24px ;
    display:flex;
    width:1200px;
    // justify-content:space-around;
    & > div {
        margin-right:24px;
        margin-bottom:62px;
    }
    flex-wrap:wrap;
}
`
const MainInnerWrapper = ({ children }) => {
  return (
    <>
      <Wrapper>
        <div className="slide">
            {children}
        </div>
      </Wrapper>
    </>
  );
};

export default MainInnerWrapper;
