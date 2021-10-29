import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

const Wrapper = styled.div`
  .container {
    margin-top: 1px;
    height: 100vh;
    & > * {
      text-align: center;
    }
    & > button:first-child {
      margin: 0 71.51px 0 auto;
    }
    & > button:last-child {
      margin: 048px auto 0 auto;
    }
    background-color: white;
    h3 {
      padding-top: 33.5px;
    }
    & > p {
      margin-top: 6px;
      font-size: 16px;
      color: var(--grey_1);
      width: 350px;
      margin: auto;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 360px;
      margin: auto;
      margin-top: 52px;
    }
    input {
      height: 48px;
      border-radius: 4px;
      border: 1px solid var(--primary);
      padding: 16px;
    }
    form > div:nth-child(1) {
      margin: 0 0 24px;
    }
    form > button {
      margin-top: 48px;
    }
  }
  .cancel {
    width: fit-content;
    /* j */
  }
  .stages {
    width: 738.56px;
    margin: auto;
    padding-top: 48px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    p {
      /* margin-top:unset; */
      font-size: 16px;
      display: flex;
      align-items: center;
      color: var(--grey_1);
      span + span {
        margin-left: 9.19px;
      }
      span:first-child {
        height: 36px;
        width: 36px;
        background-color: #efefef;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
    }
    .featured {
      color: var(--primary);
      span:first-child {
        color: white;
        background-color: var(--primary);
      }
    }
  }
`;
const QuestionStages = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [form1, setForm1] = useState("");
  const [stage, setStage] = useState(1);
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    if (
      document.getElementById("subject") !== null &&
      document.getElementById("year") !== null
    ) {
      if (
        document.getElementById("subject").value !== "Select Subject" &&
        document.getElementById("year").value !== "Select Class"
      ) {
        return setIsValid(true);
      }
      return false;
    }

    if (document.getElementById("Question type") !== null) {
      if (
        document.getElementById("Question type").value !==
        "Select question type"
      ) {
        return setIsValid(true);
      }
      return false;
    }
  };
  return (
    <Wrapper>
      <div className="container">
        <Button
          onClick={() => {
            stage !== 1 && setStage(stage - 1);
            setIsValid(false);
            // console.log(stage)
          }}
          text="Cancel"
          width="68.49px"
          color="white"
          borderColor="white"
          textColor="#404040"
        />
        <div className="stages">
          <p className="featured">
            <span>1</span>
            <span>Subject and class</span>
          </p>
          <p className={stage >= 2 && "featured"}>
            <span>2</span>
            <span>Question type</span>
          </p>
          <p className={stage >= 3 && "featured"}>
            <span>3</span>
            <span>Add questions</span>
          </p>
        </div>
        {stage === 1 && (
          <>
            <h3>Select subject and class</h3>
            <p>
              Be sure to select the right subject and class for the question(s)
              you are about to upload.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <Form
                validate={validate}
                name="subject"
                fieldStyle="select"
                selectArray={[
                  "Select Subject",
                  "English Language",
                  "Mathematics",
                  "Science",
                  "Chemistry",
                  "Physics",
                  "Biology",
                ]}
                placeholder="Select Subject"
              />
              <Form
                validate={validate}
                name="year"
                fieldStyle="select"
                selectArray={[
                  "Select Class",
                  "Year 1",
                  "Year 2",
                  "Year 3",
                  "Year 4",
                ]}
                placeholder="Select Class"
              />
            </form>
          </>
        )}
        {stage === 2 && (
          <>
            <h3>Select question type</h3>
            <p>
              Be sure to select the right subject and class for the question(s)
              you are about to upload.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <Form
                validate={validate}
                name="Question type"
                fieldStyle="select"
                selectArray={[
                  "Select question type",
                  "None",
                  "Comprehension format",
                  "Audio format",
                ]}
                placeholder="Question type"
              />
            </form>
          </>
        )}
        {stage === 3 && (
          <>
            <h3>Add questions</h3>
            <p>
              To create a question enter question details, select question type
              and select answer to the question.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <Form
                validate={validate}
                name="Question type"
                fieldStyle="shortText"
                value={form1}
                changeFunc={setForm1}
                onChange={setForm1}
                placeholder="Question type"
              />
            </form>
          </>
        )}
        <Button
          text={stage > 2 ? "Upload Question" : "Next"}
          width="360px"
          borderColor="transparent"
          color={isValid ? "var(--primary)" : "var(--grey_1)"}
          onClick={() => {
            stage !== 3 && isValid && setStage(stage + 1);
            setIsValid(false);
            console.log(stage);
          }}
        />
      </div>
    </Wrapper>
  );
};
export default QuestionStages;
