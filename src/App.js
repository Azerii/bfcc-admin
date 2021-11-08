import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Question from "./pages/Question/Question";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import MOCK_DATA from "./components/Table/MOCK_DATA.json";
import {REPORT_COLUMNS} from "./components/Table/reportColumns";
import Context from "./components/Context/Context";
import TableFunction from "./components/Table/TableFunction";
import styled from "styled-components";
const Wrapper  = ({first_name,last_name,mail,school,overal,age,date})=><div>
  <h4>{first_name,last_name}</h4>
  <p>Age group:Year {age}</p>
  <p>Email address:{mail}</p>
  <p>School name:{school}</p>
  <p>Overal test score(%):</p>
  <p>Date & time taken:{date}</p>
</div>

function App() {
  const [willModalShow, setToggleModal] = useState(false);

  return (
    <Context.Provider value={{ willModalShow, setToggleModal }}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Layout>
              <Route exact path="/" component={Overview} />
              <Route exact path="/reports" component={Reports} />
              <Route path="/questions" component={Question} />

              {
                MOCK_DATA.map(
                  data => <Route
                   path={`/${data.first_name}_${data.last_name}`} 
                   render={
                    ()=><TableFunction 
                   COLUMNS = {REPORT_COLUMNS}
                   DATA = {MOCK_DATA}
                   title='hello'
                   >
                     <Wrapper 
                     first_name={data.first_name}
                     last_name={data.last_name} 
                     age={data.age}
                     date={data["date of birth"]}
                     overal={data.age}
                     />
                   </TableFunction>
                 }
                     />
                )
              }

            </Layout>
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
