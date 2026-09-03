import type { FeeCalculationResult } from "../../types/api";

interface FeeInitEstimationViewProps {
  feeResult: FeeCalculationResult | null;
}

export default function FeeInitEstimationView({
  feeResult,
}: FeeInitEstimationViewProps) {
  const feeType = feeResult?.feeType ?? "Domestic Transfer Fee - Corporate";
  const feeCode = feeResult?.feeCode ?? "1605";
  const baseFee = feeResult?.baseFee ?? "10.00";
  const discount = feeResult?.discount ?? "0.50";
  const proposedFee = feeResult?.proposedFee ?? "9.50 CNY";

  return (
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
          height: 296,
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
            Fee Estimation
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
              height: 208,
              borderRadius: 6,
              border: "1px solid #e5e7eb",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 0,
                paddingTop: 10,
                paddingRight: 14,
                paddingBottom: 10,
                paddingLeft: 14,
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                height: 40.5,
                border: "1px solid #e5e7eb",
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
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    fontFamily: "Inter",
                    color: "#6b7280",
                    textAlign: "left",
                    lineHeight: "19.5px",
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
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "Inter",
                    color: "#1a2a4a",
                    textAlign: "left",
                    lineHeight: "19.5px",
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
                flexDirection: "row",
                gap: 0,
                paddingTop: 10,
                paddingRight: 14,
                paddingBottom: 10,
                paddingLeft: 14,
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                height: 40.5,
                border: "1px solid #e5e7eb",
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
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    fontFamily: "Inter",
                    color: "#6b7280",
                    textAlign: "left",
                    lineHeight: "19.5px",
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
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "Inter",
                    color: "#1a2a4a",
                    textAlign: "left",
                    lineHeight: "19.5px",
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
                flexDirection: "row",
                gap: 0,
                paddingTop: 10,
                paddingRight: 14,
                paddingBottom: 10,
                paddingLeft: 14,
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                height: 40.5,
                border: "1px solid #e5e7eb",
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
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    fontFamily: "Inter",
                    color: "#6b7280",
                    textAlign: "left",
                    lineHeight: "19.5px",
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
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "Inter",
                    color: "#1a2a4a",
                    textAlign: "left",
                    lineHeight: "19.5px",
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
                flexDirection: "row",
                gap: 0,
                paddingTop: 10,
                paddingRight: 14,
                paddingBottom: 10,
                paddingLeft: 14,
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                height: 40.5,
                border: "1px solid #e5e7eb",
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
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    fontFamily: "Inter",
                    color: "#6b7280",
                    textAlign: "left",
                    lineHeight: "19.5px",
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
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "Inter",
                    color: "#1a2a4a",
                    textAlign: "left",
                    lineHeight: "19.5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {discount}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 0,
                paddingTop: 10,
                paddingRight: 14,
                paddingBottom: 10,
                paddingLeft: 14,
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                height: 44,
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
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    fontFamily: "Inter",
                    color: "#6b7280",
                    textAlign: "left",
                    lineHeight: "19.5px",
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
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: "Inter",
                    color: "#e31e24",
                    textAlign: "left",
                    lineHeight: "24px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {proposedFee}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
