import { useState } from "react";
import "./App.css";
import Buttons from "./component/Buttons";
import BannerView from "./component/FeeConfirmation/BannerView";
import FeeEstimation from "./component/FeeEstimation";
import Header from "./component/Header";
import MenuLabel from "./component/MenuLabel";
import PayeeInformation from "./component/PayeeInformation";
import PayerInformation from "./component/PayerInformation";
import ProgressBar from "./component/ProgressBar";
import TopBar from "./component/TopBar";
import TransactionDetails from "./component/TransactionDetails";
import FeeConfirmationView from "./component/FeeConfirmation/FeeConfirmationView";

function App() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <>
      <TopBar />
      <Header />
      <div className="w-275 mx-auto bg-[#F5F6FA]">
        <ProgressBar />
        {isConfirmed ? (
          <>
            <BannerView />

            <FeeConfirmationView />
          </>
        ) : (
          <>
            <MenuLabel />
            <PayerInformation />
            <PayeeInformation />
            <TransactionDetails />
            <FeeEstimation />
            <Buttons onConfirm={() => setIsConfirmed(true)} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
