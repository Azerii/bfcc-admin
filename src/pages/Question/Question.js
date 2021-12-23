import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";
import NothingAdded from "../../components/Modal/NothingAdded";
import { Route } from "react-router";
import AddQuestion from "./AddQuestion";
import { formDataToJSON } from "../../utils";
import PaginationTable from "../../components/Table/PaginationTable";
import DATA from "../../assets/json/question.json";
import { COLUMNS } from "./columns";

const Wrapper = styled.div`
  position: relative;

  > h4 {
    font-size: 24px;
  }
`;

const Question = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState(DATA);
  const removeHandler = (Id) => {
    setQuestions(questions.filter((data) => data.id !== Id));

  };

  const createQuestion = (e) => {
    e.preventDefault();

    const formEl = e.target;
    const formData = new FormData(formEl);
    const data = formDataToJSON(formData);

    const updateQuestions = [...questions].push(data)
    setQuestions(updateQuestions);
    console.log(data);
    console.log(questions);
  };

  return (
    <Wrapper>
      {loading && <Loader />}
      {!questions.length && <h4>Questions</h4>}
      {!questions.length && (
        <NothingAdded text="question" link="/questions/add-question" />
      )}

      <Route exact path="/questions/add-question">
        <AddQuestion handleSubmit={createQuestion} />
      </Route>
      {questions.length > 0 && (
        <PaginationTable
          DATA={questions}
          COLUMNS={COLUMNS}
          clickFunc={removeHandler}
          title="Questions"
        />
      )}
    </Wrapper>
  );
};
export default Question;
