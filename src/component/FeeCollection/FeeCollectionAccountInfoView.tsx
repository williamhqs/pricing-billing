import BankDropdown from "../shared/BankDropdown";
import BankLabelValue from "../shared/BankLabelValue";

export default function FeeCollectionAccountInfoView() {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: 16,
      }}
    >
      <div
        style={{
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
            alignItems: "center",
            width: "100%",
            height: 46,
            padding: "12px 20px",
            borderBottom: "1px solid #e5e7eb",
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
            Collection Account
          </span>
        </div>

        <div
          style={{
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "280px 280px",
              columnGap: 32,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
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
                Collection Method
              </span>

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
                Select Collection Account
              </span>

              <BankDropdown
                width={350}
                value="3"
                options={[
                  {
                    label: "HT20240001 - 6228480837462910573",
                    value: "3",
                  },
                  {
                    label: "HT20240002 - 6228480837462910574",
                    value: "4",
                  },
                  {
                    label: "HT20240003 - 6228480837462910575",
                    value: "5",
                  },
                ]}
                onChange={() => {}}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: 18,
              paddingTop: 18,
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "280px 280px",
                columnGap: 32,
                rowGap: 20,
              }}
            >
              <BankLabelValue label="Contract No." value="HT20240001" />

              <BankLabelValue label="Account No." value="Huolala Group" />

              <BankLabelValue
                label="Account Name"
                value="6228480837462910573"
              />

              <BankLabelValue label="Account Type" value="Current Account" />

              <BankLabelValue
                label="Available Balance"
                value="500,000.00 CNY"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
