import Dropdown from "../shared/BankDropdown";
import { BankInput } from "../shared/BankInput";

export default function TransactionDetailsView() {
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
        height: 224,
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
          Transaction Details
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
              Transaction Amount
            </span>
          </div>
          <BankInput
            value=""
            onChange={() => {}}
            placeholder="Please input transaction amount No."
          />
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
          <Dropdown
            width={280}
            value="cny"
            options={[
              { label: "CNY", value: "cny" },
              { label: "USD", value: "usd" },
              { label: "SGD", value: "sgd" },
            ]}
            onChange={() => {}}
          />
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
            top: 96,
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
              Remarks
            </span>
          </div>
          <BankInput
            value=""
            onChange={() => {}}
            placeholder="Please input remarks"
          />
        </div>
      </div>
    </div>
  );
}
