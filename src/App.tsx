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
import { Step } from "./types/types";
import FeeCollectionView from "./component/FeeCollection/FeeCollectionView";

function App() {
  const [step, setStep] = useState<Step>(Step.Init);

  return (
    <>
      <TopBar />
      <Header />
      <div className="w-275 mx-auto bg-[#F5F6FA]">
        <ProgressBar />
        {step === Step.Init && (
          <>
            <MenuLabel />
            <PayerInformation />
            <PayeeInformation />
            <TransactionDetails />
            <FeeEstimation />
            <Buttons onConfirm={() => setStep(Step.FeeConfirmation)} />
          </>
        )}
        {step === Step.FeeConfirmation && (
          <>
            <BannerView />
            <FeeConfirmationView
              onConfirm={() => setStep(Step.FeeCollection)}
            />
          </>
        )}
        {step === Step.FeeCollection && <FeeCollectionView />}
      </div>
    </>
  );
}

export default App;
