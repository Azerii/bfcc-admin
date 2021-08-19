import Layout from "./Components/Layout";
import { Button }   from "./Components/Button/Button.styles";

function App() {
  return (
    <div className="App"> 
      <Layout>
        <Button className= "playBtn">
          Play Again
        </Button>
       </Layout> 
    </div>
  );
}

export default App;
