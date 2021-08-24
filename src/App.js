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
        <RadioButton name="radio" text="hello" checked/>
        <RadioButton name="radio" text="disabled"  disabled="disabled"/>
        <Pagination/>
      </Layout>
    </div>
  );
}

export default App;
