import React from "react";
import styled from "styled-components";
import { age_group } from "../assets";
import Button from "../components/Button/Button";
import Context from "../components/Context/Context";

const Wrapper = styled.div`
  & > p,
  & > img,
  & > button {
    display: block;
    text-align: center;
    margin: auto;
  }
  img {
    margin-top: 103px;
    margin-bottom: 20.5px;
  }
  p:nth-child(2) {
    font-size: 24px;
    font-weight: 500;
    color: var(--primary);
    margin-bottom: 10px;
  }
  p:nth-child(3) {
    font-size: 16px;
  }
  button {
    margin-top: 46.13px;
  }
`;
function Agegroup(props) {
  return (
    <>
      <h4>Age group</h4>
      <Wrapper>
        <img src={age_group} alt={age_group} />
        <p>There’s nothing here.</p>
        <p>
          You don’t any age group <br /> added at the monent.
        </p>
        <Context.Consumer>
          {(context) => (
            <Button
              text="Add age group"
              width="296px"
              onClick={() => context.setToggleModal(!context.willModalShow)}
            />
          )}
        </Context.Consumer>
      </Wrapper>
    </>
  );
}
export default Agegroup;
