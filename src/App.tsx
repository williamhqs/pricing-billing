import "./App.css";
import Buttons from "./component/Buttons";
import CorporateTransferFeeCollectionFullDEMO from "./component/CorporateTransferFeeCollectionFullDEMO";
import FeeEstimation from "./component/FeeEstimation";
import Header from "./component/Header";
import MenuLabel from "./component/MenuLabel";
import PayeeInformation from "./component/PayeeInformation";
import PayerInformation from "./component/PayerInformation";
import ProgressBar from "./component/ProgressBar";
import TopBar from "./component/TopBar";
import TransactionDetails from "./component/TransactionDetails";

function App() {
  return (
    <>
      {/* <CorporateTransferFeeCollectionFullDEMO /> */}
      <TopBar />
      <Header />
      <div className="w-275 mx-auto bg-[#F5F6FA]">
        <ProgressBar />
        <MenuLabel />
        <PayerInformation />
        <PayeeInformation />
        <TransactionDetails />
        <FeeEstimation />
        <Buttons />
      </div>
    </>
  );
}

export default App;
