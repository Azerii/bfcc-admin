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
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 1.2rem;
    width: 100%;
    height: 30rem;
    align-items: bottom;

    .bar {
      align-self: end;
    }
  }
`;

const Bar = styled.div`
  position: relative;
  background-color: var(--primary);
  color: #ffffff;
  padding: 1.2rem 0.6rem;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  border-radius: 2.26px;
  height: ${(props) => props.num + 25}%;

  .label {
    &.ageGroup {
      margin-top: 1.2rem;
    }

    &.score {
      font-size: 1em;
    }
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
          <span className="label score">{`${year.score}%`}</span>
          <span className="label ageGroup">{`${year.year}`}</span>
        </Bar>
      ))}
    </div>
  </Wrapper>
);

export default Card4;
