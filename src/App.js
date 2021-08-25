import Checkbox from "./components/Checkbox/Checkbox.";
import Layout from "./components/Layout";
import Navbar from './components/Navbar/Navbar'
import Pagination from './components/pagination/Pagination'
import RadioButton from "./components/RadioButton/RadioButton";


function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar/>
        <Checkbox text='Hello'/>
        <Checkbox text='Hello' disabled/>
        <RadioButton name="radio" text="apple" checked/>
        <RadioButton name="radio" text="banana"   />
        <RadioButton name="radio" text="orange"   />
        <RadioButton name="radio"  disabled="disabled" text="disabled"/>
        <Pagination/>
      </Layout>
    </div>
  );
}

export default App;
