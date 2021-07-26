import MyContainer from "./utils/MyContainer";
import Routes from "./Routes";

function App() {
  return (
    <MyContainer>
      <h3 className="makeLife">[Making your Life Easier]</h3>
      <h1 className="headTitle">Discovering the World</h1>
      <Routes />
    </MyContainer>
  );
}

export default App;
