export default function FeeCollectionResultView1({
  onDone,
}: {
  onDone: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        width: 760,
        height: 600,
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
          padding: "16px 20px",
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
            lineHeight: "22.5px",
            whiteSpace: "nowrap",
          }}
        >
          ✅ Collection Successful
        </span>
      </div>

      <div style={{ padding: "18px 24px 20px" }}>
        <div style={{ width: "100%" }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "Inter",
              color: "#1a2a4a",
              lineHeight: "19.2px",
            }}
          >
            Transaction Information
          </span>

          <div style={{ display: "flex", gap: 24, paddingTop: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 12 }}>
                <span style={labelStyle}>Business Reference No.</span>
                <p style={valueStyle}>BIZ20260911001</p>
              </div>
              <div style={{ marginBottom: 12 }}>
                <span style={labelStyle}>Payment Reference No.</span>
                <p style={valueStyle}>PAY20260911001</p>
              </div>
              <div>
                <span style={labelStyle}>Status</span>
                <div style={statusRowStyle}>
                  <div style={greenDot}></div>
                  <span style={statusTextGreen}>Collected</span>
                </div>
              </div>
            </div>

            <div
              style={{
                flex: 1,
                borderLeft: "1px solid #e5e7eb",
                paddingLeft: 28,
                paddingTop: 0,
              }}
            >
              <div style={{ marginBottom: 12 }}>
                <span style={labelStyle}>Collection Amount</span>
                <p style={valueStyle}>9.50 CNY</p>
              </div>
              <div>
                <span style={labelStyle}>Collection Time</span>
                <p style={valueStyle}>2026-09-11 14:30:25</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "100%", marginTop: 16 }}>
          <div style={{ borderTop: "1px solid #e5e7eb", padding: 16 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "Inter",
                color: "#1a2a4a",
                lineHeight: "19.2px",
              }}
            >
              Posting Details
            </span>
            <div style={{ display: "flex", gap: 24, paddingTop: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: 12 }}>
                  <span style={labelStyle}>Debit Account</span>
                  <p style={valueStyle}>6228480837462910573</p>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <span style={labelStyle}>Credit GL Account</span>
                  <p style={valueStyle}>601101 - Fee Income</p>
                </div>
                <div>
                  <span style={labelStyle}>Posting Status</span>
                  <div style={statusRowStyle}>
                    <div style={greenDot}></div>
                    <span style={statusTextGreen}>Posted</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  borderLeft: "1px solid #e5e7eb",
                  paddingLeft: 28,
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  <span style={labelStyle}>Debit Amount</span>
                  <p style={valueStyle}>9.50 CNY</p>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <span style={labelStyle}>Journal No.</span>
                  <p style={valueStyle}>JRN20260911001</p>
                </div>
                <div>
                  <span style={labelStyle}>Posting Time</span>
                  <p style={valueStyle}>2026-09-11 14:30:26</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部 Close按钮区域 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "14px 20px",
          justifyContent: "flex-end",
          width: "100%",
          border: "1px solid #e5e7eb",
          marginTop: "auto",
        }}
      >
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0 22px",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
            borderRadius: 4,
            border: "1px solid #e31e24",
            backgroundColor: "#e31e24",
            overflow: "hidden",
            cursor: "pointer",
          }}
          className="hover:bg-[#C4181E]"
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
            Close
          </span>
        </button>
      </div>
    </div>
  );
}

// 提取公共样式，复用，减少重复代码
const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  fontFamily: "Inter",
  color: "#6b7280",
  lineHeight: "19.2px",
  whiteSpace: "nowrap",
  display: "block",
};
const valueStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  fontFamily: "Inter",
  color: "#1a2a4a",
  lineHeight: "22.4px",
  margin: "2px 0 0",
};
const statusRowStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: 6,
  alignItems: "center",
  marginTop: 2,
};
const greenDot: React.CSSProperties = {
  width: 7,
  height: 7,
  backgroundColor: "#16a34a",
  borderRadius: "50%",
};
const statusTextGreen: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  fontFamily: "Inter",
  color: "#16a34a",
  lineHeight: "22.4px",
};
