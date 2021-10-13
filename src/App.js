import Layout from "./Components/Layout";
import Button from "./Components/Button/Button";
import ProgressBar from "./Components/ProgressBar";
import AlertBox from "./Components/AlertBox";
// import checkCircle from "./assets/icons/checkCircle.png";
// import Warning from "./assets/icons/Warning.svg";
// import Error from "./assets/icons/Error.svg";
// import TransparentButton from "./Components/Button/TransparentButton";
// import VerticalLine from "./Components/VerticalLine";
// import Close from "./assets/icons/Close.svg";
// import CloseButton from "./assets/icons/CloseButton.svg";

function App() {
  return (
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
        {/* <img src={checkCircle} alt="mark" className="icon left" />
          <span className="text">
            {"success alert flash, which never loose the contrast"}
          </span>
          <TransparentButton text="Button" className="success" />
          <VerticalLine className="VerticalLine" />
          <img src={Close} alt="close" className="icon right" /> */}

        {/* <AlertBox className="success">
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
        </AlertBox> */}
      </Layout>
    </div>
  );
}

export default App;
