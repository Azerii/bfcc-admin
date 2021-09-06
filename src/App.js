import Checkbox from "./components/Checkbox/Checkbox.";
import Layout from "./components/Layout";
import Navbar from './components/Navbar/Navbar'
// import Pagination from './components/pagination/Pagination'
import RadioButton from "./components/RadioButton/RadioButton";


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
      </Layout>
    </div>
  );
}

export default App;
