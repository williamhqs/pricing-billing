import BankDropdown from "../shared/BankDropdown";
import BankLabelValue from "../shared/BankLabelValue";

export default function FeeCollectionAccountInfoView() {
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
          height: 355,
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
            Collection Account
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
                  Collection Method
                </span>
              </div>

              <BankDropdown
                width={280}
                value="Transfer"
                options={[
                  { label: "Transfer", value: "Transfer" },
                  { label: "Cash", value: "Cash" },
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
                  Select Collection Account
                </span>
              </div>
              <BankDropdown
                width={280}
                value="3"
                options={[
                  { label: "HT20240001 - 6228480837462910573", value: "3" },
                  { label: "HT20240002 - 6228480837462910574", value: "4" },
                  { label: "HT20240003 - 6228480837462910575", value: "5" },
                ]}
                onChange={() => {}}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              paddingTop: 18,
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
                border: "1px solid #e5e7eb",
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
                  top: 19,
                  width: "100%",
                  height: "100%",
                }}
              >
                <BankLabelValue label="Contract No." value="HT20240001" />
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
                  top: 19,
                  width: "100%",
                  height: "100%",
                }}
              >
                <BankLabelValue label="Account No." value="Huolala Group" />
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
                  top: 81,
                  width: "100%",
                  height: "100%",
                }}
              >
                <BankLabelValue
                  label="Account Name"
                  value="6228480837462910573"
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
                  left: 513,
                  top: 81,
                  width: "100%",
                  height: "100%",
                }}
              >
                <BankLabelValue label="Account Type" value="Current Account" />
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
                  top: 143,
                  width: "100%",
                  height: "100%",
                }}
              >
                <BankLabelValue
                  label="Available Balance"
                  value="500,000.00 CNY"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
