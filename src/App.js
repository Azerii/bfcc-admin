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
      </Layout>
    </div>
    </Router>
  );
}

export default App;
