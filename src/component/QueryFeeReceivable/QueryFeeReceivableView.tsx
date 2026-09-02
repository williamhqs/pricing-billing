import { useState } from "react";
import FeeReceivableItem from "./FeeReceivableItem";

interface FeeReceivableItem {
  numberID: string;
  name: string;
  amount: string;
  currency: string;
  status: string;
}

export default function QueryFeeReceivableView() {
  const [feeReceivableItems, setFeeReceivableItems] = useState<
    FeeReceivableItem[]
  >([]);

  const addFeeItem = () => {
    console.log("this is query");
    const newItem: FeeReceivableItem = {
      numberID: `F-${Date.now()}`,
      name: "New Fee Item",
      amount: "500.00",
      currency: "SGD",
      status: "Pending",
    };

    setFeeReceivableItems((prev) => [...prev, newItem]);
  };

  const removeFeeItem = (deleteNumberID: string) => {
    setFeeReceivableItems((prev) =>
      prev.filter((item) => item.numberID !== deleteNumberID),
    );
  };

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
            width: 81,
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
          Fee Collection
        </span>
        <span
          style={{
            position: "absolute",
            left: 225.734375,
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
            left: 239.6796875,
            top: 0.5,
            width: 125,
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
          Query Fee Receivable
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
          height: 457.5,
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
            height: 182,
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
              Query Criteria
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
                    BIZ20260829000001
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
                  left: 339.3280334472656,
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
                    Customer No.
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
                    20260330000002
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
                  left: 678.6640625,
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
                    Customer Account No.
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
                    622200000000000000
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
                paddingTop: 8,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                justifyContent: "flex-end",
                alignItems: "flex-start",
                width: 994,
                height: 48,
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
                  backgroundColor: "#e31e24",
                  borderRadius: 4,
                  border: "1px solid #e31e24",
                  overflow: "hidden",
                }}
                onClick={() => addFeeItem()}
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
                  Query
                </span>
              </button>
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
              height: 187.5,
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
                Fee Receivable List
              </span>
            </div>
            {feeReceivableItems.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  paddingTop: 60,
                  paddingRight: 44,
                  paddingBottom: 60,
                  paddingLeft: 44,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 1042,
                  height: 140,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    fontFamily: "Inter",
                    color: "#9ca3af",
                    textAlign: "center",
                    lineHeight: "19.5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Please click 'Query' to retrieve fee receivable records.
                </span>
              </div>
            ) : (
              <FeeReceivableItem />
            )}
          </div>
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
              backgroundColor: "#d1d5db",
              borderRadius: 4,
              border: "1px solid #d1d5db",
              overflow: "hidden",
            }}
            onClick={() => {}}
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
              Proceed to Fee Collection
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
