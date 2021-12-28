import React,{useState} from 'react';
import { Route } from "react-router";
import styled from 'styled-components';
import Card from '../../components/Card';
import AddQuestion from "./AddQuestion";
import PaginationTable from "../../components/Table/PaginationTable";
import NothingAdded from "../../components/Modal/NothingAdded";
import DATA from "../../assets/json/question.json";
import { COLUMNS } from "./columns";
import { formDataToJSON } from "../../utils";


const Wrapper = styled.div` 
.main{
    display:flex;
    justify-content:space-between;
    // flex-wrap:wrap;
}
& > h4{
    font-size:24px;
    margin:56px 0 24px;
}
`
const Test = ()=> {
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
    return(
        <Wrapper>
        {/* {loading && <Loader />} */}
        {!questions.length && <h4>Test</h4>}
        {!questions.length && (
          <NothingAdded text="test" link="/test/add-test" />
        )}
  
        <Route exact path="/test/add-test">
          <AddQuestion handleSubmit={createQuestion} />
        </Route>
        {questions.length > 0 && (
          <PaginationTable
            DATA={questions}
            COLUMNS={COLUMNS}
            clickFunc={removeHandler}
            title="Test"
          />
        )}
      </Wrapper>
    )
}
export default Test