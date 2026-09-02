export function FeeReceivableTableHeaderView() {
  const cellStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    height: 38.5,
    backgroundColor: "#f8fafc",
    border: "1px solid #e5e7eb",
  };
  const textStyle: React.CSSProperties = {
    position: "absolute",
    left: 14,
    top: 10.5,
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "Inter",
    color: "#6b7280",
    lineHeight: "18px",
    whiteSpace: "nowrap",
  };

  return (
    <div style={{ width: "100%", height: 38.5, position: "relative" }}>
      {/* Select */}
      <div style={{ ...cellStyle, left: 0, width: 64.375 }}>
        <span style={textStyle}>Select</span>
      </div>
      {/* Fee No. 加宽至180 */}
      <div style={{ ...cellStyle, left: 64.375, width: 180 }}>
        <span style={textStyle}>Fee No.</span>
      </div>
      {/* Fee Name 压缩到200 */}
      <div style={{ ...cellStyle, left: 244.375, width: 200 }}>
        <span style={textStyle}>Fee Name</span>
      </div>
      {/* Amount Receivable (CNY) */}
      <div style={{ ...cellStyle, left: 444.375, width: 228.28125 }}>
        <span style={textStyle}>Amount Receivable (CNY)</span>
      </div>
      {/* Currency */}
      <div style={{ ...cellStyle, left: 672.65625, width: 104.4765625 }}>
        <span style={textStyle}>Currency</span>
      </div>
      {/* Status */}
      <div style={{ ...cellStyle, left: 777.1328125, width: 193.8046875 }}>
        <span style={textStyle}>Status</span>
      </div>
    </div>
  );
}
