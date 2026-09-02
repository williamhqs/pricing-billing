import { useCallback, useState } from "react";
import { Step } from "../types/types";
import type { FeeCalculationResult, TransferFormData } from "../types/api";
import { calcFeeRegDtl, ApiError } from "../api/calcFeeRegDtl";
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

export default function HomeScreen() {
  const [step, setStep] = useState<Step>(Step.Init);
  const [selectedMenuKey, setselectedMenuKey] = useState("TransferInitiation");

  const [formData, setFormData] = useState<TransferFormData>({
    payerAccountNo: "",
    payeeAccountNo: "",
    transactionAmount: "",
    currency: "cny",
    remark: "",
  });

  const [feeResult, setFeeResult] = useState<FeeCalculationResult | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = useCallback(
    <K extends keyof TransferFormData>(field: K, value: TransferFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await calcFeeRegDtl(formData);
      setFeeResult(result);
      setStep(Step.FeeConfirmation);
    } catch (err: unknown) {
      const message =
        err instanceof ApiError
          ? err.message
          : "An unexpected error occurred, please try again";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [formData]);

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
          <div className="flex flex-col gap-2.5 w-full">
            <MenuLabelView title={"Domestic Transfer"} />
            <PayerInformationView
              accountNo={formData.payerAccountNo}
              onAccountNoChange={(v) => updateField("payerAccountNo", v)}
            />
            <PayeeInformationView
              accountNo={formData.payeeAccountNo}
              onAccountNoChange={(v) => updateField("payeeAccountNo", v)}
            />
            <TransactionDetailsView
              amount={formData.transactionAmount}
              currency={formData.currency}
              remark={formData.remark}
              onAmountChange={(v) => updateField("transactionAmount", v)}
              onCurrencyChange={(v) => updateField("currency", v)}
              onRemarkChange={(v) => updateField("remark", v)}
            />
            <FeeInitEstimationView feeResult={feeResult} />
            {error && (
              <div
                style={{
                  padding: "10px 16px",
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: 6,
                  color: "#dc2626",
                  fontSize: 13,
                  fontFamily: "Inter",
                }}
              >
                {error}
              </div>
            )}
            <ButtonsView onConfirm={handleSubmit} loading={loading} />
          </div>
        )}

        {step === Step.FeeConfirmation && (
          <>
            <BannerView bizSnglNo={feeResult?.bizSnglNo} />
            <FeeConfirmationView
              feeResult={feeResult}
              onConfirm={() => {
                setselectedMenuKey("FeeCollection");
                setStep(Step.FeeCollection);
              }}
              onAdjustment={() => setStep(Step.FeeAdjustment)}
            />
          </>
        )}
        {step === Step.FeeAdjustment && (
          <FeeAdjustmentView
            feeResult={feeResult}
            custNo="20260330000002"
            custName="Huolala Group"
            onApproved={() => {
              setselectedMenuKey("FeeCollection");
              setStep(Step.FeeCollection);
            }}
          />
        )}
        {step === Step.FeeCollection && <FeeCollectionView />}
      </div>
    </>
  );
}