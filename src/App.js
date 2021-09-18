import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import Agegroup from './pages/Agegroup';
import Overview from './pages/Overview';
import Question from './pages/Question';
import Reports from './pages/Reports';
import Subjects from './pages/Subjects';
import Test from './pages/Test';
import Checkbox from "./components/Checkbox/Checkbox.";
import Navbar from './components/Navbar/Navbar'
import RadioButton from "./components/RadioButton/RadioButton";
import Main from "./components/Pagination/Main"

function App() {
  return (
    <Router>
    <div className="App">
      <Layout>
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Overview}/>
          <Route exact path="/reports" component={Reports}/>
          <Route exact path="/agegroup" component={Agegroup}/>
          <Route exact path="/subjects" component={Subjects}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/question" component={Question}/>
          </Switch>
        <Navbar/>
        <Checkbox text='Check'/>
        <Checkbox text='Unchecked'/>
        <Checkbox text='disabled' disabled/>
        <RadioButton name="radio" text="apple" />
        <RadioButton name="radio" text="banana"   />
        <RadioButton name="radio" text="orange"   />
        <RadioButton name="radio"  disabled="disabled" text="disabled"/>
        <Main/>
      </Layout>
    </div>
    </Router>
  );
}

export default App;
