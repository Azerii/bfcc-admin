import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
position:relative;
  width: 365px;
  height: 360px;
  border-radius: 16px;
  background-color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;

  .small {
    font-size: 18px;
  }

  & > h4 {
    color: var(--primary);
    font-size: 24px;
    font-size: 700;
  }

  & > div {
    margin: auto;
    width: ${props=> props.width ||"257px"};

    p,
    h4 {
      text-align: center;
    }

    p {
      font-size: 14px;
    }

    h4 {
      font-size: 20px;
    }

    a {
      color: var(--primary);
    }

  }
.rotate{
    transform:${props=>props.rotate ? 'rotate(-90deg)' :'rotate(0deg)'};
    position: ${props=>props.rotate ? ''  :'absolute'};
    bottom: ${props=>props.rotate ? '' :'24px'};
}

`;



const Card3 = (props) => (

  <Wrapper {...props}>
    <h4 className={props.isEmpty ? "" : "small"}>{props.title}</h4>
    <div className='rotate'>{props.children}</div>
  </Wrapper>
);

export default Card3;
