import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import BarRep from "../components/BarRep";
import Card4 from "../components/Card4";

const Wrapper = styled.div`
  .slide {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }

  .otherData {
    display: grid;x
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
  }

  .performancePerSubject {
    grid-column: 1/4;
  }

  .performancePerLevel {
    grid-column: 2/4;
  }
`;

const arr = [
  { name: "English Language", number: "12", score: 78, color: "#CB42F0" },
  { name: "Mathematics", number: "12", score: 95, color: "#F2B05C" },
  { name: "Chemistry", number: "3", score: 68, color: "#52D858" },
  { name: "Physics", number: "3", score: 55, color: "#F7716E" },
  { name: "Biology", number: "3", score: 100, color: "var(--primary)" },
];

const years = [
  { year: 1, score: 85, color: "var(--primary)" },
  { year: 2, score: 60, color: "var(--primary)" },
  { year: 3, score: 78, color: "var(--primary)" },
  { year: 4, score: 10, color: "var(--primary)" },
  { year: 5, score: 65, color: "var(--primary)" },
  { year: 6, score: 68, color: "var(--primary)" },
  { year: 7, score: 55, color: "var(--primary)" },
  { year: 8, score: 63, color: "var(--primary)" },
  { year: 9, score: 57, color: "var(--primary)" },
  { year: 10, score: 63, color: "var(--primary)" },
];

const Overview = ({ empty = false }) => {
  return (
    <Wrapper>
      <h4>Overview</h4>
      <div className="slide">
        <Card title="Total number of tests taken" />
        <Card title="Tests per subject taken" />
      </div>
      <div className="otherData">
        <Card2 array={arr} />
        {empty && (
          <Card3 title="Performance per Age">
            <h4>No performance recorded.</h4>
            <p>
              Create test to view test permformance by class. Click{" "}
              <Link to="/">here</Link>
            </p>
          </Card3>
        )}
        {!empty && (
          <Card4
            className="performancePerLevel"
            title="Performance per age group"
            width="auto"
            arr={years}
          />
        )}

        <Card3
          className="performancePerSubject"
          title="Performance per subject"
          width="auto"
        >
          {empty ? (
            <>
              <h4>No performance recorded.</h4>
              <p>
                Create test to view test permformance by class. Click{" "}
                <Link to="/">here</Link>
              </p>
            </>
          ) : (
            <>
              {arr.map((ar, index) => (
                <BarRep
                  bar='bar2'
                  key={index}
                  num={ar.score}
                  text={`${ar.name} (${ar.score}%)`}
                  color={ar.color}
                />
              ))}
            </>
          )}
        </Card3>
      </div>
    </Wrapper>
  );
};

export default Overview;
