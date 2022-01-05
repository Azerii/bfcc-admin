import React, { useState } from "react";
import styled from "styled-components";
import Spacer from "../../components/Spacer";
import cancel from "../../assets/icons/cancel.svg";
import checkBadge from "../../assets/icons/checkBadge.svg";
import { useHistory } from "react-router";
import FormGroup from "../../components/FormGroup";
import RadioButton from "../../components/RadioButton/RadioButton";
import Button from "../../components/Button/Button";
import { formDataToJSON } from "../../utils";

const Wrapper = styled.div`
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
    grid-template-columns: 1fr ;
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

const subjects = ["English Language", "Mathematics", "Science"];
const ageGroups = [
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
];

const AddTest = ({ handleSubmit }) => {
  const router = useHistory();
  const [answerKey, setAnswerKey] = useState(null);
  const [fileDetails, setFileDetails] = useState(null);
  const [subject, setSubject] = useState("");

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
      <FormWrapper onSubmit={handleSubmit}>
        <button
          type="button"
          className="cancel"
          onClick={() => router.push("/test")}
        >
          <img src={cancel} alt="Close" className="icon" />
        </button>
        <h3 className="textCenter">Add test</h3>
        <Spacer y={0.6} />
        <p className="textCenter">
          To create a test enter test details, select question type and
          select the answer key.
        </p>
        <Spacer y={4.8} />
        <div className="grid2">
        <FormGroup
          fieldStyle="shortText"
          name="name"
          placeholder="Test name"
          required
        />
            <FormGroup
              fieldStyle="dropdown"
              name="ageGroup"
              placeholder="Age group"
              list={ageGroups}
              required
            />
          <FormGroup
            fieldStyle="dropdown"
            name="subject"
            placeholder="Select Subject"
            list={subjects}
            setValue={setSubject}
            required
          />
           <FormGroup
            fieldStyle="dropdown"
            name="subject"
            placeholder="Test duration"
            list={subjects}
            setValue={setSubject}
            required
          />
        </div>
      
        <Spacer y={1.2} />
        <FormGroup
          fieldStyle="shortText"
          name="question"
          placeholder="Number of questions per subject"
          required
        />
        
        <Spacer y={2.4} />

        {/* Attach file */}
        <FormGroup
            fieldStyle="dropdown"
            name="subject"
            placeholder="Total Score"
            list={subjects}
            setValue={setSubject}
            required
          />

        <Spacer y={2.4} />

        <FormGroup
            fieldStyle="multiline"
            name="comprehension"
            placeholder="Test instruction"
          />
        <div className="divider"></div>
        <Spacer y={1.2} />
     
        <Spacer y={4.8} />
        <Button text="Create test" width="100%" />
      </FormWrapper>
    </Wrapper>
  );
};

export default AddTest;
