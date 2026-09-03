import MenuLabelView from "../FeeInit/MenuLabelView";
import FeeCollectionAccountInfoView from "./FeeCollectionAccountInfoView";

export default function FeeCollectionView({
  onFeeCollect,
}: {
  onFeeCollect: () => void;
}) {
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
                BIZ20260901230679
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
                1605
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
                Domestic Transfer Fee - Corporate
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
                9.50 CNY
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
                CNY
              </span>
            </div>
          </div>
        </div>
      </div>

      <FeeCollectionAccountInfoView />
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
              9.50 CNY
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
            onClick={onFeeCollect}
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
              Confirm Collection
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
