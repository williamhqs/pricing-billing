import type { FeeCollectionResult } from "../../types/api";

interface FeeCollectionResultViewProps {
  result: FeeCollectionResult | null;
  currency: string;
  onDone: () => void;
}

export default function FeeCollectionResultView({
  result,
  currency,
  onDone,
}: FeeCollectionResultViewProps) {

  const bizSnglNo = result?.bizSnglNo ?? "";
  const feeCollected = result ? `${result.feeCollected} ${currency}` : "";
  const collectionMethod = result?.collectionMethod ?? "Transfer";
  const collectionTime = result?.collectionTime ?? "";
  const status = result?.status ?? "Collected";


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
        width: 440,
        height: 418.28125,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        boxShadow: "0px 12px 40px #1a2a4a2e",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 4,
          backgroundColor: "#e31e24",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          paddingTop: 16,
          paddingRight: 20,
          paddingBottom: 16,
          paddingLeft: 20,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          border: "1px solid #e5e7eb",
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
          ✅ Collection Successful
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          paddingTop: 20,
          paddingRight: 20,
          paddingBottom: 20,
          paddingLeft: 20,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            paddingTop: 10,
            paddingRight: 0,
            paddingBottom: 10,
            paddingLeft: 0,
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            height: 41.796875,
            border: "1px solid #f3f4f6",
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
                fontWeight: 500,
                fontFamily: "Inter",
                color: "#6b7280",
                textAlign: "left",
                lineHeight: "20.799999237060547px",
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
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "Inter",
                color: "#374151",
                textAlign: "right",
                lineHeight: "20.799999237060547px",
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
            flexDirection: "row",
            gap: 16,
            paddingTop: 10,
            paddingRight: 0,
            paddingBottom: 10,
            paddingLeft: 0,
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            height: 41.796875,
            border: "1px solid #f3f4f6",
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
                fontWeight: 500,
                fontFamily: "Inter",
                color: "#6b7280",
                textAlign: "left",
                lineHeight: "20.799999237060547px",
                whiteSpace: "nowrap",
              }}
            >
              Fee Collected
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
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "Inter",
                color: "#374151",
                textAlign: "right",
                lineHeight: "20.799999237060547px",
                whiteSpace: "nowrap",
              }}
            >
              {feeCollected}
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            paddingTop: 10,
            paddingRight: 0,
            paddingBottom: 10,
            paddingLeft: 0,
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            height: 41.796875,
            border: "1px solid #f3f4f6",
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
                fontWeight: 500,
                fontFamily: "Inter",
                color: "#6b7280",
                textAlign: "left",
                lineHeight: "20.799999237060547px",
                whiteSpace: "nowrap",
              }}
            >
              Collection Method
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
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "Inter",
                color: "#374151",
                textAlign: "right",
                lineHeight: "20.799999237060547px",
                whiteSpace: "nowrap",
              }}
            >
              {collectionMethod}
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            paddingTop: 10,
            paddingRight: 0,
            paddingBottom: 10,
            paddingLeft: 0,
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            height: 41.796875,
            border: "1px solid #f3f4f6",
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
                fontWeight: 500,
                fontFamily: "Inter",
                color: "#6b7280",
                textAlign: "left",
                lineHeight: "20.799999237060547px",
                whiteSpace: "nowrap",
              }}
            >
              Payment Reference No.
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
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "Inter",
                color: "#374151",
                textAlign: "right",
                lineHeight: "20.799999237060547px",
                whiteSpace: "nowrap",
              }}
            >
              PAY20260902413
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            paddingTop: 10,
            paddingRight: 0,
            paddingBottom: 10,
            paddingLeft: 0,
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            height: 41.796875,
            border: "1px solid #f3f4f6",
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
                fontWeight: 500,
                fontFamily: "Inter",
                color: "#6b7280",
                textAlign: "left",
                lineHeight: "20.799999237060547px",
                whiteSpace: "nowrap",
              }}
            >
              Collection Time
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
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "Inter",
                color: "#374151",
                textAlign: "right",
                lineHeight: "20.799999237060547px",
                whiteSpace: "nowrap",
              }}
            >
              {collectionTime}
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            paddingTop: 10,
            paddingRight: 0,
            paddingBottom: 10,
            paddingLeft: 0,
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            height: 40.796875,
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
                fontWeight: 500,
                fontFamily: "Inter",
                color: "#6b7280",
                textAlign: "left",
                lineHeight: "20.799999237060547px",
                whiteSpace: "nowrap",
              }}
            >
              Status
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
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "Inter",
                color: "#16a34a",
                textAlign: "right",
                lineHeight: "20.799999237060547px",
                whiteSpace: "nowrap",
              }}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          paddingTop: 14,
          paddingRight: 20,
          paddingBottom: 14,
          paddingLeft: 20,
          justifyContent: "flex-end",
          alignItems: "flex-start",
          width: "100%",
          border: "1px solid #e5e7eb",
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
          className="hover:bg-[#C4181E] bg-[#e31e24]"

          onClick={onDone}
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
            Done
          </span>
        </button>
      </div>
    </div>
  );
}
