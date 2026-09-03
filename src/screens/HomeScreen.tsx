import { useCallback, useState } from "react";
import { Step } from "../types/types";
import type {
  FeeCalculationResult,
  FeeCollectionResult,
  TransferFormData,
} from "../types/api";
import { calcFeeRegDtl, ApiError } from "../api/calcFeeRegDtl";
import { bizAssetSync } from "../api/bizAssetSync";
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
import QueryFeeReceivableView from "../component/QueryFeeReceivable/QueryFeeReceivableView";
import FeeCollectionProcessComplete from "../component/FeeCollection/FeeCollectionProcessComplete";
import FeeCollectionResultView from "../component/FeeCollection/FeeCollectionResultView";
import ConfirmView from "../component/QueryFeeReceivable/ConfirmView";

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

  const [feeResult, setFeeResult] = useState<FeeCalculationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [collectionResult, setCollectionResult] =
    useState<FeeCollectionResult | null>(null);
  const [amountReceivable, setAmountReceivable] = useState<string | undefined>(
    undefined,
  );
  const [syncLoading, setSyncLoading] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);

  const updateField = useCallback(
    <K extends keyof TransferFormData>(
      field: K,
      value: TransferFormData[K],
    ) => {
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

  const handleConfirmProceed = useCallback(async () => {
    if (!feeResult) return;
    setSyncLoading(true);
    setSyncError(null);
    try {
      const actlRecvAmt = Number(feeResult.proposedFee.split(" ")[0]);
      await bizAssetSync({
        bizSnglNo: feeResult.bizSnglNo,
        custNo: "20260330000002",
        custName: "Huolala Group",
        feeNo: feeResult.feeCode,
        feeNm: feeResult.feeType,
        actlRecvAmt,
        custAcctNo: formData.payerAccountNo || "622200000000000000",
        approvalOpinion: "客户为白金客户，申请优惠",
      });
      setselectedMenuKey("FeeCollection");
      setStep(Step.FeeCollection);
    } catch (err: unknown) {
      const message =
        err instanceof ApiError
          ? err.message
          : "An unexpected error occurred, please try again";
      setSyncError(message);
    } finally {
      setSyncLoading(false);
    }
  }, [feeResult, formData.payerAccountNo]);

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
                key: "QueryFeeReceivable",
                label: "Query Fee Receivable",
                onClick: () => {
                  setselectedMenuKey("QueryFeeReceivable");
                  setStep(Step.QueryFeeReceivable);
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
              <PayerInformationView
                accountNo={formData.payerAccountNo}
                onAccountNoChange={(v) => updateField("payerAccountNo", v)}
                onFillMockDataByClick={() =>
                  setFormData({
                    payerAccountNo: "622200000000000000",
                    payeeAccountNo: "6217003829165047281",
                    transactionAmount: "20000.00",
                    currency: "cny",
                    remark: "Goods payment",
                  })
                }
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
          </>
        )}

        {step === Step.FeeConfirmation && (
          <>
            <BannerView bizSnglNo={feeResult?.bizSnglNo} />
            <FeeConfirmationView
              feeResult={feeResult}
              onConfirm={handleConfirmProceed}
              onAdjustment={() => setStep(Step.FeeAdjustment)}
              loading={syncLoading}
              error={syncError}
            />
          </>
        )}
        {step === Step.FeeAdjustment && (
          <FeeAdjustmentView
            feeResult={feeResult}
            custNo="20260330000002"
            custName="Huolala Group"
            custAcctNo={formData.payerAccountNo || "622200000000000000"}
            onApproved={() => {
              setselectedMenuKey("FeeCollection");
              setStep(Step.FeeCollection);
            }}
          />
        )}
        {step === Step.FeeCollection && (
          <FeeCollectionView
            feeResult={feeResult}
            amountReceivable={amountReceivable}
            custNo="20260330000002"
            custAcctNo={formData.payerAccountNo || "622200000000000000"}
            txIntdNo={feeResult?.intdNo ?? ""}
            onFeeCollect={(result) => {
              setCollectionResult(result);
              setStep(Step.FeeCollectionResult);
            }}
          />
        )}

        <Overlay visible={step === Step.FeeCollectionResult}>
          <FeeCollectionResultView
            result={collectionResult}
            currency={feeResult?.currency ?? "CNY"}
            onDone={() => setStep(Step.FeeCollectionProcessComplete)}
          />
        </Overlay>

        {step === Step.QueryFeeReceivable && (
          <QueryFeeReceivableView
            onProceed={(receivableAmt) => {
              if (receivableAmt) setAmountReceivable(receivableAmt);
              setStep(Step.QueryFeeReceivableConfirm);
            }}
          />
        )}

        <Overlay visible={step === Step.QueryFeeReceivableConfirm}>
          <ConfirmView
          totalAmount={amountReceivable}
            onCancel={() => setStep(Step.QueryFeeReceivable)}
            onConfirm={() => {
              setselectedMenuKey("FeeCollection");
              setStep(Step.FeeCollection);
            }}
          />
        </Overlay>

        {step === Step.FeeCollectionProcessComplete && (
          <FeeCollectionProcessComplete />
        )}
      </div>
    </>
  );
}
