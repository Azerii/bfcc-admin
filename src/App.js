import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import Agegroup from "./pages/Agegroup";
import Overview from "./pages/Overview";
import Question from "./pages/Question/Question";
import Reports from "./pages/Reports";
import Subjects from "./pages/Subjects";
import Test from "./pages/Test";
import Checkbox from "./components/Checkbox/Checkbox.";
import RadioButton from "./components/RadioButton/RadioButton";
import Main from "./components/Pagination/Main";
import Login from "./pages/Login";
import Modal from "./components/Modal/Modal";
import Context from "./components/Context/Context";
import QuestionStages from "./pages/Question/QuestionStages";



function App() {
  const [willModalShow, setToggleModal] = useState(false);
  return (
    <Context.Provider value={{ willModalShow, setToggleModal }}>
      <Router>
        <div className="App">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
          {willModalShow && <Modal />}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/modal" component={Modal} />
            <Route exact path="/add-question" component={QuestionStages} />
            <Layout>
              <Route exact path="/" component={Overview} />
              <Route exact path="/reports" component={Reports} />
              <Route exact path="/agegroup" component={Agegroup} />
              <Route exact path="/subjects" component={Subjects} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/question" component={Question} />
              {/* <Checkbox text='Check'/> */}
              {/* <Checkbox text='Unchecked'/> */}
              {/* <Checkbox text='disabled' disabled/> */}
              {/* <RadioButton name="radio" text="apple" /> */}
              {/* <RadioButton name="radio" text="banana"   /> */}
              {/* <RadioButton name="radio" text="orange"   /> */}
              {/* <RadioButton name="radio"  disabled="disabled" text="disabled"/> */}
              {/* <Main/> */}
            </Layout>
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
