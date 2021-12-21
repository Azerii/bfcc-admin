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
  const removeHandler = (id) => {
    console.log('button was clicked')
    setQuestions(questions.filter((data) => !data.id.includes(1)));
  };

  const createQuestion = (e) => {
    e.preventDefault();

    const formEl = e.target;
    const formData = new FormData(formEl);
    const data = formDataToJSON(formData);

    console.log(data);
  };

  return (
    <Wrapper>
      {loading && <Loader />}
      {/* <h4>Questions</h4> */}
      {!questions.length && (
        <NothingAdded text="question" link="/questions/add-question" />
      )}

      <Route exact path="/questions/add-question">
        <AddQuestion handleSubmit={createQuestion} />
      </Route>
      <PaginationTable
        DATA={questions}
        COLUMNS={COLUMNS}
        clickFunc={()=>removeHandler(1)}
        title="Questions"
      />
    </Wrapper>
  );
};
export default Question;
