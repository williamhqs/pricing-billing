import { useState } from "react";
import { Step } from "../types/types";
import TopBarView from "../component/FeeInit/TopBarView";
import HeaderView from "../component/FeeInit/HeaderView";
import MenuLabelView from "../component/FeeInit/MenuLabelView";
import PayerInformationView from "../component/FeeInit/PayerInformationView";
import PayeeInformationView from "../component/FeeInit/PayeeInformationView";
import TransactionDetailsView from "../component/FeeInit/TransactionDetailsView";
import FeeInitEstimationView from "../component/FeeInit/FeeInitEstimationView";
import ButtonsView from "../component/FeeInit/ButtonsView";
import BannerView from "../component/FeeConfirmation/BannerView";
import FeeConfirmationView from "../component/FeeConfirmation/FeeConfirmationView";
import FeeCollectionView from "../component/FeeCollection/FeeCollectionView";
import { TwoActionMenu } from "../component/shared/TwoActionMenu";
import FeeAdjustmentView from "../component/FeeConfirmation/FeeAdjustmentView";
import Overlay from "../component/shared/Overlay";
import FeeCollectionResultView from "../component/FeeCollection/FeeCollectionResultView";
import FeeCollectionProcessComplete from "../component/FeeCollection/FeeCollectionProcessComplete";

export default function HomeScreen() {
  const [step, setStep] = useState<Step>(Step.Init);
  const [selectedMenuKey, setselectedMenuKey] = useState("TransferInitiation");
  return (
    <>
      <TopBarView />
      <HeaderView />
      <div className="w-275 mx-auto bg-[#F5F6FA]">
        <div style={{ padding: 30 }}>
          <TwoActionMenu
            activeKey={selectedMenuKey}
            items={[
              {
                key: "TransferInitiation",
                label: "Transfer Initiation",
                onClick: () => {
                  setselectedMenuKey("TransferInitiation");
                  setStep(Step.Init);
                },
              },
              {
                key: "FeeCollection",
                label: "Fee Collection",
                onClick: () => {
                  setselectedMenuKey("FeeCollection");
                  setStep(Step.FeeCollection);
                },
              },
            ]}
          />
        </div>
        {step === Step.Init && (
          <>
            <MenuLabelView title={"Domestic Transfer"} />
            <div className="flex flex-col gap-3.5 w-full">
              <PayerInformationView />
              <PayeeInformationView />
              <TransactionDetailsView />
              <FeeInitEstimationView />
              <ButtonsView onConfirm={() => setStep(Step.FeeConfirmation)} />
            </div>
          </>
        )}

        {step === Step.FeeConfirmation && (
          <>
            <BannerView />
            <FeeConfirmationView
              onConfirm={() => {
                setselectedMenuKey("FeeCollection");
                setStep(Step.FeeCollection);
              }}
              onAdjustment={() => setStep(Step.FeeAdjustment)}
            />
          </>
        )}
        {step === Step.FeeAdjustment && <FeeAdjustmentView />}
        {step === Step.FeeCollection && (
          <FeeCollectionView
            onFeeCollect={() => setStep(Step.FeeCollectionResult)}
          />
        )}

        <Overlay visible={step === Step.FeeCollectionResult}>
          <FeeCollectionResultView
            onDone={() => setStep(Step.FeeCollectionProcessComplete)}
          />
        </Overlay>

        {step === Step.FeeCollectionProcessComplete && (
          <FeeCollectionProcessComplete />
        )}
      </div>
    </>
  );
}
