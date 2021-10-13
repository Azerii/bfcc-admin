import React from "react";
import styled from "styled-components";
import { age_group } from "../../assets";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  & > p,
  & > img,
  & > a {
    display: block;
    text-align: center;
    margin: auto;
    width:fit-content;
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
  a {
    margin-top: 46.13px;
  }
`;
function NothingAdded({text,onClick,link}) {
  return (
      <Wrapper>
        <img src={age_group } alt={age_group } />
        <p>There’s nothing here.</p>
        <p>
          You haven't added any {text} <br /> at the monent.
        </p>
           <Link to={link}>
               <Button
              text="Add question"
              width="144px"
              onClick={onClick}
              />
              </Link> 
      </Wrapper>
  );
}
export default NothingAdded;
