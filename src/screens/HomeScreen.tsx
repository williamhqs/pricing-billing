import { useState } from "react";
import { Step } from "../types/types";
import TopBarView from "../component/FeeInit/TopBarView";
import HeaderView from "../component/FeeInit/HeaderView";
import ProgressBar from "../component/FeeInit/ProgressBar";
import MenuLabelView from "../component/FeeInit/MenuLabelView";
import PayerInformationView from "../component/FeeInit/PayerInformationView";
import PayeeInformationView from "../component/FeeInit/PayeeInformationView";
import TransactionDetailsView from "../component/FeeInit/TransactionDetailsView";
import FeeInitEstimationView from "../component/FeeInit/FeeInitEstimationView";
import ButtonsView from "../component/FeeInit/ButtonsView";
import BannerView from "../component/FeeConfirmation/BannerView";
import FeeConfirmationView from "../component/FeeConfirmation/FeeConfirmationView";
import FeeCollectionView from "../component/FeeCollection/FeeCollectionView";

export default function HomeScreen() {
  const [step, setStep] = useState<Step>(Step.Init);

  return (
    <>
      <TopBarView />
      <HeaderView />
      <div className="w-275 mx-auto bg-[#F5F6FA]">
        <ProgressBar />
        {step === Step.Init && (
          <div className="flex flex-col gap-2.5">
            <MenuLabelView />
            <PayerInformationView />
            <PayeeInformationView />
            <TransactionDetailsView />
            <FeeInitEstimationView />
            <ButtonsView onConfirm={() => setStep(Step.FeeConfirmation)} />
          </div>
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
