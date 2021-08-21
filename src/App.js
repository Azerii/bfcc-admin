import Layout from "./components/Layout";
import Navbar from './components/Navbar/Navbar'
import Pagination from './components/pagination/Pagination'


function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar/>
        <Pagination/>
      </Layout>
    </div>
  );
}

export default App;
