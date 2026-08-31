import "./App.css";
import Buttons from "./component/Buttons";
import FeeEstimation from "./component/FeeEstimation";
import Header from "./component/Header";
import PayerInformation from "./component/PayerInformation";
import TopBar from "./component/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      <Header />
      <PayerInformation />
      <FeeEstimation />
      <Buttons />
    </div>
  );
}

export default App;
