import type { FeeCalculationResult } from "../../types/api";

export default function FeeConfirmationView({
  feeResult,
  onConfirm,
  onAdjustment,
  loading = false,
  error,
}: {
  feeResult: FeeCalculationResult | null;
  onConfirm: () => void;
  onAdjustment: () => void;
  loading?: boolean;
  error?: string | null;
}) {
  const bizSnglNo = feeResult?.bizSnglNo ?? "BIZ20260901226302";
  const feeCode = feeResult?.feeCode ?? "1605";
  const feeType = feeResult?.feeType ?? "Domestic Transfer Fee - Corporate";
  const baseFee = feeResult
    ? `${feeResult.baseFee} ${feeResult.currency}`
    : "10.00 CNY";
  const discount = feeResult
    ? `${feeResult.discount} ${feeResult.currency}`
    : "0.50 CNY";
  const proposedFee = feeResult?.proposedFee ?? "9.50 CNY";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        marginTop: 24,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        height: 466,
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
          Fee Summary
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
            height: 186,
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
                Base Fee
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
                {baseFee}
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
                Discount
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
                {discount}
              </span>
            </div>
          </div>
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
              backgroundColor: "#fff5f5",
              borderRadius: 6,
              border: "1px solid #fecaca",
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
                {proposedFee}
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
            Please confirm the fee details above.
          </span>
        </div>

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
            width: 994,
            height: 56,
          }}
        >
          {/* <button
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
            onClick={onAdjustment}
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
              Request Adjustment
            </span>
          </button> */}
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
              borderRadius: 4,
              border: "1px solid #e31e24",
              overflow: "hidden",
            }}
            className="hover:bg-[#C4181E] bg-[#e31e24]"
            onClick={onConfirm}
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
              {loading ? "Submitting..." : "Confirm & Proceed"}
            </span>
          </button>
        </div>
        {error && (
          <div style={{ padding: "10px 16px", marginTop: 8, backgroundColor: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, color: "#dc2626", fontSize: 13, fontFamily: "Inter", width: "100%" }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
