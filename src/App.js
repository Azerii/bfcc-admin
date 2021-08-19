import FormGroup from "./components/FormGroup";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <FormGroup
          inputType="text"
          fieldStyle="shortText"
          name="test"
          placeholder="test"
        />
        <FormGroup
          inputType="text"
          fieldStyle="search"
          name="test_search"
          placeholder="test"
          list={["item 1", "item2", "item 3", "item 4", "item 5"]}
        />
        <FormGroup
          inputType="text"
          fieldStyle="multiline"
          name="test_multiline"
          placeholder="test"
        />
        <FormGroup
          inputType="text"
          fieldStyle="dropdown"
          name="test_dropdown"
          placeholder="test"
          list={["item 1", "item2", "item 3", "item 4", "item 5"]}
        />
      </Layout>
    </div>
  );
}

export default App;
