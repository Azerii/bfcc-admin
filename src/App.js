import Checkbox from "./components/Checkbox/Checkbox.";
import Layout from "./components/Layout";
import Navbar from './components/Navbar/Navbar'
import RadioButton from "./components/RadioButton/RadioButton";
import Main from "./components/Pagination/Main"


function App() {
  return (
    <div className="App">
      <Layout>
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
  );
}

export default App;
