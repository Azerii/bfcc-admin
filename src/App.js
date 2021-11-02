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

import Table from "./components/Table/PaginationTable";
import SortingTable from "./components/Table/SortingTable";

import QuestionStages from "./pages/Question/QuestionStages";

// import Layout from "./Components/Layout";
// import Button from "./Components/Button/Button";
import ProgressBar from "./components/ProgressBar";
import AlertBox from "./components/AlertBox";
// import checkCircle from "./assets/icons/checkCircle.png";
// import Warning from "./assets/icons/Warning.svg";
// import Error from "./assets/icons/Error.svg";
// import TransparentButton from "./Components/Button/TransparentButton";
// import VerticalLine from "./Components/VerticalLine";
// import Close from "./assets/icons/Close.svg";
// import CloseButton from "./assets/icons/CloseButton.svg";

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
              <Route path="/questions" component={Question} />
              <Route exact path="/table" component={Table} />
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

    /*
    <div className="App">
      <Layout>
        <Button text="My Button" />
        <Button text="My Button" className="secondary" />
        <Button text="My Button" disabled />
        <Button text="My Button" className="secondary" disabled />
        <Button text="My Button" type="dropdown" />
        <Button text="My Button" className="secondary" type="dropdown" />
        <Button text="My Button" type="dropdown" />
        <Button text="My Button" className="secondary" type="dropdown" />
        <ProgressBar />

        <AlertBox
          className="success"
          type="check"
          text="Test created successfully"
        />
        <AlertBox
          className="success"
          type="check"
          text="Test created successfully"
          hideBtn
        />

        <AlertBox
          className="warning"
          type="check"
          text="You don't have permission to ..."
        />
        <AlertBox
          className="warning"
          type="check"
          text="You don't have permission to ..."
          hideBtn
        />

        <AlertBox
          className="error"
          type="check"
          text="Test created successfully"
        />
        <AlertBox
          className="error"
          type="check"
          text="Test created successfully"
          hideBtn
        />

        <AlertBox
          className="info"
          type="check"
          text="Test created successfully"
        />
        <AlertBox
          className="info"
          type="check"
          text="Test created successfully"
          hideBtn
        />
            */

    /* <img src={checkCircle} alt="mark" className="icon left" />
          <span className="text">
            {"success alert flash, which never loose the contrast"}
          </span>
          <TransparentButton text="Button" className="success" />
          <VerticalLine className="VerticalLine" />
          <img src={Close} alt="close" className="icon right" /> */

    /* <AlertBox className="success">
          <img src={checkCircle} alt="mark" className="icon left" />
          <span className="text">
            {"success alert flash, which never loose the contrast"}
          </span>
          <VerticalLine className="VerticalLine" />
          <img src={Close} alt="close" className="icon right" />
        </AlertBox>

        <AlertBox className="warning">
          <img src={Warning} alt="sign" className="icon left" />
          <span className="text">
            {"A warning alert flash, which never loose the contrast"}
          </span>
          <TransparentButton text="Button" className="warningBtn" />
          <VerticalLine className="verticalThin" />
          <img src={CloseButton} alt="close" className="icon right" />
        </AlertBox>
        <AlertBox className="warning">
          <img src={Warning} alt="sign" className="icon left" />
          <span className="text">
            {"A warning alert flash, which never loose the contrast"}
          </span>
          <VerticalLine className="verticalThin" />
          <img src={CloseButton} alt="close" className="icon right" />
        </AlertBox>

        <AlertBox className="error">
          <img src={Error} alt="circle" className="icon left" />
          <span className="text">
            {"An error alert flash, which never loose the contrast"}
          </span>
          <TransparentButton text="Button" className="error" />
          <VerticalLine className="VerticalLine" />
          <img src={Close} alt="close" className="icon right" />
        </AlertBox>
        <AlertBox className="error">
          <img src={Error} alt="circle" className="icon left" />
          <span className="text">
            {"An error alert flash, which never loose the contrast"}
          </span>
          <VerticalLine className="VerticalLine" />
          <img src={Close} alt="close" className="icon right" />
        </AlertBox>

        <AlertBox className="errorPry">
          <img src={Error} alt="circle" className="icon left" />
          <span className="text">
            {"An error alert flash, which never loose the contrast"}
          </span>
          <TransparentButton text="Button" className="error" />
          <VerticalLine className="VerticalLine" />
          <img src={Close} alt="close" className="icon right" />
        </AlertBox>
        <AlertBox className="errorPry">
          <img src={Error} alt="circle" className="icon left" />
          <span className="text">
            {"An error alert flash, which never loose the contrast"}
          </span>
          <VerticalLine className="VerticalLine" />
          <img src={Close} alt="close" className="icon right" />
        </AlertBox> */
    //       </Layout>
    //     </div>
  );
}

export default App;
