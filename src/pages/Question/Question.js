import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";
import NothingAdded from "../../components/Modal/NothingAdded";
import Spacer from "../../components/Spacer";
import cancel from "../../assets/icons/cancel.svg";
import checkBadge from "../../assets/icons/checkBadge.svg";
import { Route, useHistory } from "react-router";
import FormGroup from "../../components/FormGroup";
import RadioButton from "../../components/RadioButton/RadioButton";
import Button from "../../components/Button/Button";

const Wrapper = styled.div`
  padding: 5.6rem 2.4rem;
  position: relative;

  > h4 {
    font-size: 24px;
  }
`;

const AddQuestion = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  background-color: #00000020;
  z-index: 10;
  height: 100vh;
  overflow: auto;
`;

const FormWrapper = styled.form`
  width: 56rem;
  margin: 7.2rem auto;
  background-color: #ffffff;
  border-radius: 2rem;
  padding: 4.8rem 4.8rem 4.8rem;
  position: relative;

  .cancel {
    position: absolute;
    top: 4.8rem;
    right: 4.8rem;

    .icon {
      height: 2rem;
    }
  }

  .grid2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4rem;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    padding: 4.8rem 2.4rem;

    .actionBtns {
      width: 100%;
    }
  }
`;

const Options = styled.div`
  .option {
    position: relative;

    &.selected {
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -2rem;
        height: 1.2rem;
        width: 1.2rem;
        background-color: var(--primary);
        border-radius: 50%;
      }
    }
  }

  .divider {
    border-top: 1px solid var(--border);
    width: 100%;
  }
`;

const Answer = styled.div`
  .label {
    color: var(--primary);
    padding-top: 5px;
  }
`;

const AttachFile = styled.div`
  .browse {
    height: 4.8rem;
    border: 1px solid var(--border);
    border-radius: 0.4rem;
    padding: 0 1.6rem;
  }

  .attachment {
    display: grid;
    grid-template-columns: 10rem 2fr 1fr;
    grid-gap: 2.4rem;
    align-items: center;
    padding: 1.6rem 2.4rem;

    .imgWrapper {
      width: 100%;
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 0.4rem;

      img {
        height: 100%;
      }
    }

    .fileDetails {
      color: var(--sup_text);
      overflow: hidden;
      max-width: 90%;

      .text {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    .change {
      text-align: right;

      .prompt {
        cursor: pointer;
      }
    }

    .changeBtn {
      color: var(--primary);
    }

    .removeBtn {
      color: var(--danger);
    }
  }

  #fileInput {
    display: none;
  }

  .uploadIcon {
    height: 2.4rem;
    margin-bottom: 1.2rem;
  }

  .textUnderline {
    text-decoration: underline;
  }
`;

const Question = () => {
  const router = useHistory();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  //   const [questionText, setQuestionText] = useState("");
  const [answerKey, setAnswerKey] = useState(null);
  const [fileDetails, setFileDetails] = useState(null);

  const loadFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileDetails(file);
    }

    e.target.value = null;
  };

  const getFileSize = (size) => {
    return size < 1000
      ? `${size.toFixed(1)} b`
      : size > 1000 && size < 1000 * 1000
      ? `${(size / 1000).toFixed(1)} kb`
      : `${(size / 1000 / 1000).toFixed(1)} mb`;
  };

  return (
    <Wrapper>
      {loading && <Loader />}
      <h4>Questions</h4>
      {!questions.length && (
        <NothingAdded text="question" link="/questions/add-question" />
      )}

      <Route exact path="/questions/add-question">
        <AddQuestion>
          <FormWrapper>
            <button
              type="button"
              className="cancel"
              onClick={() => router.push("/questions")}
            >
              <img src={cancel} alt="Close" className="icon" />
            </button>
            <h3 className="textCenter">Add question</h3>
            <Spacer y={0.6} />
            <p className="textCenter">
              To create a question enter question details, select question type
              and select the answer key.
            </p>
            <Spacer y={4.8} />
            <div className="grid2">
              <FormGroup
                fieldStyle="dropdown"
                name="subject"
                placeholder="Subject"
                list={["English Language", "Mathematics", "Science"]}
                required
              />
              <FormGroup
                fieldStyle="dropdown"
                name="ageGroup"
                placeholder="Class"
                list={[
                  "Year 1",
                  "Year 2",
                  "Year 3",
                  "Year 4",
                  "Year 5",
                  "Year 6",
                  "Year 7",
                  "Year 8",
                  "Year 9",
                  "Year 10",
                ]}
                required
              />
            </div>
            <Spacer y={2.4} />
            <FormGroup
              fieldStyle="multiline"
              name="comprehension"
              placeholder="Comprehension"
              required
            />
            <Spacer y={1.2} />
            <FormGroup
              fieldStyle="shortText"
              name="question"
              placeholder="Question"
              required
            />
            <Spacer y={2.4} />
            <Options>
              <FormGroup
                className={`option${answerKey === "1" ? " selected" : ""}`}
                fieldStyle="shortText"
                name="option1"
                placeholder="Option 1"
                outline={false}
                required
              />
              <Spacer y={1.2} />
              <FormGroup
                className={`option${answerKey === "2" ? " selected" : ""}`}
                fieldStyle="shortText"
                name="option2"
                placeholder="Option 2"
                outline={false}
                required
              />
              <Spacer y={1.2} />
              <FormGroup
                className={`option${answerKey === "3" ? " selected" : ""}`}
                fieldStyle="shortText"
                name="option3"
                placeholder="Option 3"
                outline={false}
                required
              />
              <Spacer y={1.2} />
              <FormGroup
                className={`option${answerKey === "4" ? " selected" : ""}`}
                fieldStyle="shortText"
                name="option4"
                placeholder="Option 4"
                outline={false}
                required
              />
            </Options>
            <Spacer y={2.4} />

            {/* Attach file */}
            <AttachFile>
              <input
                type="file"
                accept="image/*,audio/*"
                id="fileInput"
                onChange={(e) => loadFile(e)}
              />
              {!fileDetails && (
                <button
                  type="button"
                  className="browse"
                  onClick={() => document.querySelector("#fileInput").click()}
                >
                  Attach file
                </button>
              )}
              {fileDetails && (
                <div className="attachment">
                  <div className="imgWrapper">
                    <img
                      src={URL.createObjectURL(fileDetails)}
                      alt="meal"
                      id="photoOutput"
                    />
                  </div>
                  <div className="imgDetails">
                    <h5 className="text">{fileDetails.name}</h5>
                    <Spacer y={1.2} />
                    <p className="small">{getFileSize(fileDetails.size)}</p>
                  </div>
                  <div className="change">
                    <button
                      className="underline prompt changeBtn"
                      onClick={() =>
                        document.querySelector("#fileInput").click()
                      }
                    >
                      Change
                    </button>
                    <Spacer y={1.2} />
                    <button
                      className="underline prompt removeBtn"
                      onClick={() => setFileDetails(null)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </AttachFile>

            <Spacer y={2.4} />
            <div className="divider"></div>
            <Spacer y={1.2} />
            <Answer className="flexRow justifySpaceBetween alignCenter">
              <div className="flexRow alignCenter">
                <img
                  src={checkBadge}
                  alt="Check badge"
                  className="checkBadge"
                />
                <Spacer x={1.2} />
                <span className="label">Answer</span>
              </div>
              <div className="flexRow alignCenter">
                <div>
                  <RadioButton
                    name="answerKey"
                    value={1}
                    setValue={setAnswerKey}
                  />
                </div>
                <Spacer x={1.2} />
                <div>
                  <RadioButton
                    name="answerKey"
                    value={2}
                    setValue={setAnswerKey}
                  />
                </div>
                <Spacer x={1.2} />
                <div>
                  <RadioButton
                    name="answerKey"
                    value={3}
                    setValue={setAnswerKey}
                  />
                </div>
                <Spacer x={1.2} />
                <div>
                  <RadioButton
                    name="answerKey"
                    value={4}
                    setValue={setAnswerKey}
                  />
                </div>
              </div>
            </Answer>
            <Spacer y={4.8} />
            <Button text="Upload" width="100%" />
          </FormWrapper>
        </AddQuestion>
      </Route>
    </Wrapper>
  );
};
export default Question;
