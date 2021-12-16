import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
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

  .data {
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-gap: 0.5rem;
    width: 100%;
    height: 30rem;
    align-items: bottom;

   
  }
`;

const Bar = styled.div`
  position: relative;
      align-self: end;
  background-color: var(--primary);
  color: #ffffff;
  padding: 0 0 0.5rem  0;
  font-size: 16px;
  
  font-weight: 700;
  border-radius: 2.26px;
  height: ${(props) => props.num + 25}%;
  /* overflow:hidden; */

  .label {
    position:absolute;
    transform: rotate(-90deg) ;
bottom: 0;
    margin: 0 auto;
    width:8rem;
 
  }
`;

const Card4 = (props) => (
  <Wrapper {...props}>
    <h4 className={props.isEmpty ? "" : "small"}>{props.title}</h4>
    <div className="data">
      {props?.arr?.map((year, index) => (
        <Bar
          className="bar"
          key={index}
          color={year.color}
          num={year.score >= 25 ? year.score - 25 : year.score}
        >
            <p className="label">{`YEAR ${year.year} ${year.score}%`}</p>
        </Bar>
      ))}
    </div>
  </Wrapper>
);

export default Card4;
