import { useCallback, useState } from "react";
import MenuLabelView from "../FeeInit/MenuLabelView";
import FeeCollectionAccountInfoView from "./FeeCollectionAccountInfoView";
import type {
  FeeCalculationResult,
  FeeCollectionResult,
} from "../../types/api";
import { gthrAfterFee } from "../../api/gthrAfterFee";
import { ApiError } from "../../api/calcFeeRegDtl";

interface FeeCollectionViewProps {
  feeResult: FeeCalculationResult | null;
  amountReceivable?: string;
  custNo: string;
  custAcctNo: string;
  txIntdNo: string;
  onFeeCollect: (result: FeeCollectionResult) => void;
}

export default function FeeCollectionView({
  feeResult,
  amountReceivable,
  custNo,
  custAcctNo,
  txIntdNo,
  onFeeCollect,
}: FeeCollectionViewProps) {
  const bizSnglNo = feeResult?.bizSnglNo ?? "";
  const feeNo = feeResult?.feeCode ?? "1605";
  const feeName = feeResult?.feeType ?? "Domestic Transfer Fee - Corporate";
  const currency = feeResult?.currency ?? "CNY";
  const displayAmount =
    amountReceivable ??
    (feeResult ? feeResult.proposedFee.split(" ")[0] : "9.50");
  const displayAmountWithCurrency = `${displayAmount} ${currency}`;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConfirmCollection = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await gthrAfterFee({
        bizSnglNo,
        custNo,
        custAcctNo,
        coltfeAcctNo: "6228480837462910573",
        curCd: "156",
        feeNo: "1605",
        feeNm: "汇兑转账手续费－对公",
        actlRecvAmt: Number(displayAmount),
        txIntdNo,
      });
      onFeeCollect(result);
    } catch (err: unknown) {
      const message =
        err instanceof ApiError
          ? err.message
          : "An unexpected error occurred, please try again";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [bizSnglNo, custNo, custAcctNo, displayAmount, txIntdNo, onFeeCollect]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        height: 863,
      }}
    >
      <MenuLabelView title={"Fee Collection"} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          height: 258,
          backgroundColor: "#ffffff",
          borderRadius: 6,
          border: "1px solid #e5e7eb",
          boxShadow: "0px 1px 2px #1a2a4a0a",
          overflow: "visible",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            paddingTop: 12,
            paddingRight: 20,
            paddingBottom: 12,
            paddingLeft: 20,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            border: "1px solid #e5e7eb",
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "Inter",
              color: "#1a2a4a",
              textAlign: "left",
              lineHeight: "21px",
              whiteSpace: "nowrap",
            }}
          >
            Fee to Collect
          </span>
        </div>
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              position: "absolute",
              left: 24,
              top: 20,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#6b7280",
                  textAlign: "left",
                  lineHeight: "18px",
                  whiteSpace: "nowrap",
                }}
              >
                Business Reference No.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#1a2a4a",
                  textAlign: "left",
                  lineHeight: "21px",
                  whiteSpace: "nowrap",
                }}
              >
                {bizSnglNo}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              position: "absolute",
              left: 537,
              top: 20,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#6b7280",
                  textAlign: "left",
                  lineHeight: "18px",
                  whiteSpace: "nowrap",
                }}
              >
                Fee No.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#1a2a4a",
                  textAlign: "left",
                  lineHeight: "21px",
                  whiteSpace: "nowrap",
                }}
              >
                {feeNo}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              position: "absolute",
              left: 24,
              top: 82,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#6b7280",
                  textAlign: "left",
                  lineHeight: "18px",
                  whiteSpace: "nowrap",
                }}
              >
                Fee Name
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#1a2a4a",
                  textAlign: "left",
                  lineHeight: "21px",
                  whiteSpace: "nowrap",
                }}
              >
                {feeName}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              position: "absolute",
              left: 24,
              top: 144,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#6b7280",
                  textAlign: "left",
                  lineHeight: "18px",
                  whiteSpace: "nowrap",
                }}
              >
                Amount Receivable
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "Inter",
                  color: "#e31e24",
                  textAlign: "left",
                  lineHeight: "21px",
                  whiteSpace: "nowrap",
                }}
              >
                {displayAmountWithCurrency}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              position: "absolute",
              left: 537,
              top: 144,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#6b7280",
                  textAlign: "left",
                  lineHeight: "18px",
                  whiteSpace: "nowrap",
                }}
              >
                Currency
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#1a2a4a",
                  textAlign: "left",
                  lineHeight: "21px",
                  whiteSpace: "nowrap",
                }}
              >
                {currency}
              </span>
            </div>
          </div>
        </div>
      </div>

      <FeeCollectionAccountInfoView />
      {error && (
        <div
          style={{
            padding: "10px 16px",
            marginTop: 8,
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: 6,
            color: "#dc2626",
            fontSize: 13,
            fontFamily: "Inter",
            width: "100%",
          }}
        >
          {error}
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          paddingTop: 16,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            paddingTop: 16,
            paddingRight: 18,
            paddingBottom: 16,
            paddingLeft: 18,
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Inter",
                color: "#1a2a4a",
                textAlign: "left",
                lineHeight: "22.5px",
                whiteSpace: "nowrap",
              }}
            >
              Total Fee to Collect:
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                fontFamily: "Inter",
                color: "#e31e24",
                textAlign: "left",
                lineHeight: "42px",
                whiteSpace: "nowrap",
              }}
            >
              {displayAmountWithCurrency}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          paddingTop: 20,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 86,
            position: "relative",
          }}
        >
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              paddingTop: 0,
              paddingRight: 36,
              paddingBottom: 0,
              paddingLeft: 36,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: 843.296875,
              top: 0,
              height: 44,
              borderRadius: 4,
              border: "1px solid #e31e24",
              overflow: "hidden",
            }}
            className="hover:bg-[#C4181E] bg-[#e31e24]"
            onClick={() => {
              const mockFeeCollectionResultFailed: FeeCollectionResult = {
                bizSnglNo: "BIZ202609030002",
                feeCollected: "1250.00",
                collectionMethod: "ACCOUNT_DEDUCT",
                collectionTime: "2026-09-03 14:31:00",
                status: "FAIL",
              };
              onFeeCollect(mockFeeCollectionResultFailed);
            }}
            disabled={loading}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "Inter",
                color: "#ffffff",
                textAlign: "center",
                lineHeight: "21px",
                whiteSpace: "nowrap",
              }}
            >
              {loading ? "Processing..." : "Confirm Collection"}
            </span>
          </button>
          <span
            style={{
              position: "absolute",
              left: 758.984375,
              top: 68,
              width: 285,
              height: 18,
              fontSize: 12,
              fontWeight: 400,
              fontFamily: "Inter",
              color: "#9ca3af",
              textAlign: "left",
              lineHeight: "18px",
              whiteSpace: "nowrap",
            }}
          >
            This will call B000TL to process the fee collection.
          </span>
        </div>
      </div>
    </div>
  );
}
