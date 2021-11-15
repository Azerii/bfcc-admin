import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Question from "./pages/Question/Question";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import MOCK_DATA from "./components/Table/MOCK_DATA.json";
import { REPORT_COLUMNS } from "./components/Table/reportColumns";
import Context from "./components/Context/Context";
import TableFunction from "./components/Table/TableFunction";
import styled from "styled-components";
import { download } from "./assets";

const Wrapper = styled.div`
position: relative;
background:white;
padding: 48px;
h4, * + p{
  margin-bottom: 24px;

  & > span:first-child{
    display:inline-block;
    width:184px;
    color:var(--grey_1);
  }
  
}

  button{
    height:48px;
    border-radius:8px;
    width:174px;
    color:white;
    background:var(--primary);
    font-size:16px;
    position: absolute;
    right:48px;
    top:48px;
    display:flex;
    align-items:center;
    justify-content:center;

    img{
      width:14.1px;
      height:16px;
      margin-left: 7.05px;
    }
  }
  
`
const Details = ({ first_name, last_name, mail, school, overal, age_group, date }) => <Wrapper>
  <button>Download Report
    <img src={download} alt="download" />
  </button>
  <h4>{first_name} {last_name}</h4>
  <p><span>Age group: </span>  <span>Year {age_group}</span></p>
  <p><span>Email address:</span> <span>{mail}</span></p>
  <p><span>School name:</span> <span>{school}</span></p>
  <p><span>Overal test score(%):</span> <span>{overal}</span></p>
  <p><span>Date & time taken:</span>   <span>{date}</span></p>
</Wrapper>

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
                  (data, index) => {
                    // setInterval(() => console.log([{}]), 51000)
                    let arrayOfObjects = Object.entries(MOCK_DATA[index].subject).map(a => {
                      return {
                        subject: a[0][0].toLocaleUpperCase() + a[0].substring(1),
                        score: [a[1]],
                        total: [a[1]],
                      }
                    })
                    return <Route
                      path={`/${data.first_name}_${data.last_name}`}
                      render={
                        () => <TableFunction
                          COLUMNS={REPORT_COLUMNS}
                          DATA={arrayOfObjects}

                        //  title='hello'
                        >
                          <Details
                            first_name={data.first_name}
                            last_name={data.last_name}
                            age_group={data.age_group}
                            mail={data.email}
                            date={data["date of birth"]}
                            overal={data.age_group}
                            school={data.country}
                            date={data["date&time"]}
                          />
                        </TableFunction>
                      }
                    />
                  }
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
