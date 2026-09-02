import { BankInput } from "../shared/BankInput";

export default function FeeAdjustmentView() {
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
        <CenterDetailView />
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
              Approve & Continue
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function CenterDetailView() {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 16,
        flexDirection: "column",
        width: "100%",
        height: 394,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        border: "1px solid #e5e7eb",
        boxShadow: "0px 1px 2px #1a2a4a0a",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          width: "100%",
          minHeight: 48,
          padding: "12px 20px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "Inter",
            color: "#1a2a4a",
            lineHeight: "21px",
            whiteSpace: "nowrap",
          }}
        >
          Approval Details
        </span>
      </div>

      {/* Details */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto auto",
          columnGap: 40,
          rowGap: 20,
          padding: "20px 24px",
          alignContent: "start",
          minHeight: 0,
        }}
      >
        {/* Business Reference No. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#6b7280",
              lineHeight: "18px",
              whiteSpace: "nowrap",
            }}
          >
            Business Reference No.
          </span>

          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#1a2a4a",
              lineHeight: "21px",
              whiteSpace: "nowrap",
            }}
          >
            BIZ20260829000001
          </span>
        </div>

        {/* Fee Code */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#6b7280",
              lineHeight: "18px",
              whiteSpace: "nowrap",
            }}
          >
            Fee Code
          </span>

          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#1a2a4a",
              lineHeight: "21px",
              whiteSpace: "nowrap",
            }}
          >
            1605
          </span>
        </div>

        {/* Fee Type */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#6b7280",
              lineHeight: "18px",
              whiteSpace: "nowrap",
            }}
          >
            Fee Type
          </span>

          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#1a2a4a",
              lineHeight: "21px",
              whiteSpace: "nowrap",
            }}
          >
            Domestic Transfer Fee - Corporate
          </span>
        </div>

        {/* Empty cell */}
        <div />

        {/* Proposed Fee */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#6b7280",
              lineHeight: "18px",
              whiteSpace: "nowrap",
            }}
          >
            Proposed Fee
          </span>

          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Inter",
              color: "#e31e24",
              lineHeight: "21px",
              whiteSpace: "nowrap",
            }}
          >
            9.50 CNY
          </span>
        </div>

        {/* Manual Adjustment */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#6b7280",
              lineHeight: "18px",
              whiteSpace: "nowrap",
            }}
          >
            Manual Adjustment (CNY)
          </span>

          <BankInput value="9.5" onChange={() => {}} />
        </div>
      </div>

      {/* Approved Fee */}
      <div
        style={{
          flexShrink: 0,
          width: "100%",
          padding: "0 24px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            minHeight: 76,
            padding: "16px 18px",
            backgroundColor: "#f0fdf4",
            borderRadius: 6,
            border: "1px solid #bbf7d0",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "Inter",
              color: "#1a2a4a",
              lineHeight: "21px",
              whiteSpace: "nowrap",
            }}
          >
            Approved Fee
          </span>

          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              fontFamily: "Inter",
              color: "#16a34a",
              lineHeight: "42px",
              whiteSpace: "nowrap",
            }}
          >
            9.50 CNY
          </span>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          flexShrink: 0,
          width: "100%",
          minHeight: 30,
          padding: "0 24px 12px",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            color: "#9ca3af",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Approved Fee is calculated from Manual Adjustment and will be used for
          fee collection.
        </span>
      </div>
    </div>
  );
}
