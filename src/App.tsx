import { useState } from "react";
import "./App.css";
import ButtonsView from "./component/FeeInit/ButtonsView";
import BannerView from "./component/FeeConfirmation/BannerView";
import FeeInitEstimationView from "./component/FeeInit/FeeInitEstimationView";
import HeaderView from "./component/FeeInit/HeaderView";
import MenuLabelView from "./component/FeeInit/MenuLabelView";
import PayeeInformationView from "./component/FeeInit/PayeeInformationView";
import PayerInformationView from "./component/FeeInit/PayerInformationView";
import ProgressBar from "./component/FeeInit/ProgressBar";
import TopBarView from "./component/FeeInit/TopBarView";
import TransactionDetailsView from "./component/FeeInit/TransactionDetailsView";
import FeeConfirmationView from "./component/FeeConfirmation/FeeConfirmationView";
import { Step } from "./types/types";
import FeeCollectionView from "./component/FeeCollection/FeeCollectionView";

function App() {
  const [step, setStep] = useState<Step>(Step.Init);

  return (
    <>
      <TopBarView />
      <HeaderView />
      <div className="w-275 mx-auto bg-[#F5F6FA]">
        <ProgressBar />
        {step === Step.Init && (
          <>
            <MenuLabelView />
            <PayerInformationView />
            <PayeeInformationView />
            <TransactionDetailsView />
            <FeeInitEstimationView />
            <ButtonsView onConfirm={() => setStep(Step.FeeConfirmation)} />
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
