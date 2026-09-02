import { useCallback, useState } from "react";
import { BankInput } from "../shared/BankInput";
import type { FeeCalculationResult } from "../../types/api";
import { bizAssetSync } from "../../api/bizAssetSync";
import { ApiError } from "../../api/calcFeeRegDtl";

interface FeeAdjustmentViewProps {
  feeResult: FeeCalculationResult | null;
  custNo: string;
  custName: string;
  onApproved: () => void;
}

export default function FeeAdjustmentView({
  feeResult,
  custNo,
  custName,
  onApproved,
}: FeeAdjustmentViewProps) {
  const bizSnglNo = feeResult?.bizSnglNo ?? "BIZ20260829000001";
  const feeCode = feeResult?.feeCode ?? "1605";
  const feeType = feeResult?.feeType ?? "Domestic Transfer Fee - Corporate";
  const proposedFee = feeResult?.proposedFee ?? "9.50 CNY";
  const currency = feeResult?.currency ?? "CNY";

  const initialAmt = feeResult
    ? String(feeResult.proposedFee.split(" ")[0])
    : "9.50";
  const [manualAmt, setManualAmt] = useState(initialAmt);
  // approvalOpinion 预留，等页面添加 adjustment reason 输入框后启用
  const [approvalReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const approvedFee = `${manualAmt} ${currency}`;

  const handleApprove = useCallback(async () => {
    const amt = Number(manualAmt);
    if (Number.isNaN(amt) || amt <= 0) {
      setError("Manual Adjustment must be a positive number");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await bizAssetSync({
        bizSnglNo,
        custNo,
        custName,
        feeNo: feeCode,
        feeNm: feeType,
        actlRecvAmt: amt,
        approvalOpinion: approvalReason,
      });
      onApproved();
    } catch (err: unknown) {
      const message =
        err instanceof ApiError
          ? err.message
          : "An unexpected error occurred, please try again";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [bizSnglNo, custNo, custName, feeCode, feeType, manualAmt, approvalReason, onApproved]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        paddingTop: 20,
        paddingRight: 28,
        paddingBottom: 48,
        paddingLeft: 28,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: 1100,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 18,
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 0.5,
            width: 119,
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
          Transaction Services
        </span>
        <span
          style={{
            position: "absolute",
            left: 125.0703125,
            top: 0.5,
            width: 8,
            height: 18,
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            color: "#cbd5e1",
            textAlign: "left",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        ></span>
        <span
          style={{
            position: "absolute",
            left: 139.015625,
            top: 0.5,
            width: 87,
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
          Fee Processing
        </span>
        <span
          style={{
            position: "absolute",
            left: 232.046875,
            top: 0.5,
            width: 8,
            height: 18,
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            color: "#cbd5e1",
            textAlign: "left",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        ></span>
        <span
          style={{
            position: "absolute",
            left: 245.9921875,
            top: 0.5,
            width: 52,
            height: 18,
            fontSize: 12,
            fontWeight: 500,
            fontFamily: "Inter",
            color: "#1a2a4a",
            textAlign: "left",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Approval
        </span>
      </div>
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
          alignItems: "flex-start",
          width: 1044,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            paddingTop: 12,
            paddingRight: 16,
            paddingBottom: 12,
            paddingLeft: 16,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            backgroundColor: "#fff7ed",
            borderRadius: 4,
            border: "1px solid #ea580c",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#1a2a4a",
              textAlign: "left",
              lineHeight: "19.5px",
              whiteSpace: "nowrap",
            }}
          >
            Fee adjustment requested. Approver may revise the Proposed Fee via
            Manual Adjustment.
          </span>
        </div>
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
            alignItems: "flex-start",
            width: "100%",
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
              height: 394,
              backgroundColor: "#ffffff",
              borderRadius: 6,
              border: "1px solid #e5e7eb",
              boxShadow: "0px 1px 2px #1a2a4a0a",
              overflow: "hidden",
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
                Approval Details
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 20,
                paddingRight: 24,
                paddingBottom: 20,
                paddingLeft: 24,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
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
                    left: 0,
                    top: 0,
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
                    left: 513,
                    top: 0,
                    width: "100%",
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
                      Fee Code
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
                      {feeCode}
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
                    left: 0,
                    top: 62,
                    width: "100%",
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
                      Fee Type
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
                      {feeType}
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
                    left: 0,
                    top: 124,
                    width: "100%",
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
                      Proposed Fee
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
                      {proposedFee}
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
                    left: 513,
                    top: 124,
                    width: "100%",
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
                      Manual Adjustment ({currency})
                    </span>
                  </div>
                  <BankInput type="number" step="0.1" value={manualAmt} onChange={setManualAmt} />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  paddingTop: 200,
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
                    backgroundColor: "#f0fdf4",
                    borderRadius: 6,
                    border: "1px solid #bbf7d0",
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
                        fontSize: 14,
                        fontWeight: 600,
                        fontFamily: "Inter",
                        color: "#1a2a4a",
                        textAlign: "left",
                        lineHeight: "21px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Approved Fee
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
                        color: "#16a34a",
                        textAlign: "left",
                        lineHeight: "42px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {approvedFee}
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  paddingTop: 12,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: 994,
                  height: 30,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    fontFamily: "Inter",
                    color: "#9ca3af",
                    textAlign: "left",
                    lineHeight: "18px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Approved Fee is calculated from Manual Adjustment and will be
                  used for fee collection.
                </span>
              </div>
            </div>
          </div>
        </div>
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
            flexDirection: "row",
            gap: 12,
            paddingTop: 16,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            justifyContent: "flex-end",
            alignItems: "flex-start",
            width: 1044,
            height: 56,
          }}
        >
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              paddingTop: 0,
              paddingRight: 22,
              paddingBottom: 0,
              paddingLeft: 22,
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              backgroundColor: "#ffffff",
              borderRadius: 4,
              border: "1px solid #cbd5e1",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "Inter",
                color: "#1a2a4a",
                textAlign: "center",
                lineHeight: "21px",
                whiteSpace: "nowrap",
              }}
            >
              Reject
            </span>
          </button>
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              paddingTop: 0,
              paddingRight: 22,
              paddingBottom: 0,
              paddingLeft: 22,
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              backgroundColor: "#e31e24",
              borderRadius: 4,
              border: "1px solid #e31e24",
              overflow: "hidden",
            }}
            onClick={handleApprove}
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
              {loading ? "Submitting..." : "Approve & Continue"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
