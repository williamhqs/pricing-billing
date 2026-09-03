import img_48922 from "../../assets/48922.png";

interface HeaderProps {
  checkedAll: boolean;
  onSelectAll: () => void;
}
export function FeeReceivableTableHeaderView({
  checkedAll,
  onSelectAll,
}: HeaderProps) {
  const cellStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    height: 38.5,
    backgroundColor: "#f8fafc",
    border: "1px solid #e5e7eb",
  };

  return (
    <div style={{ width: "100%", height: 38.5, position: "relative" }}>
      <div style={{ ...cellStyle, left: 0, width: 64.375 }}>
        <div
          onClick={onSelectAll}
          style={{
            position: "absolute",
            left: 14,
            top: 10,
            width: 16,
            height: 16,
            backgroundColor: checkedAll ? "#e31e24" : "#ffffff",
            borderRadius: 2,
            border: checkedAll ? "" : "1px solid #767676",
            overflow: "hidden",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {checkedAll && (
            <img
              src={img_48922}
              alt="checked"
              style={{ width: 14, height: 14, objectFit: "cover" }}
            />
          )}
        </div>
      </div>

      <div style={{ ...cellStyle, left: 64.375, width: 180 }}>
        <span
          style={{
            position: "absolute",
            left: 14,
            top: 10.5,
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "Inter",
            color: "#6b7280",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Fee No.
        </span>
      </div>
      {/* Fee Name */}
      <div style={{ ...cellStyle, left: 244.375, width: 200 }}>
        <span
          style={{
            position: "absolute",
            left: 14,
            top: 10.5,
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "Inter",
            color: "#6b7280",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Fee Name
        </span>
      </div>

      <div style={{ ...cellStyle, left: 444.375, width: 228.28125 }}>
        <span
          style={{
            position: "absolute",
            left: 14,
            top: 10.5,
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "Inter",
            color: "#6b7280",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Amount Receivable (CNY)
        </span>
      </div>

      <div style={{ ...cellStyle, left: 672.65625, width: 104.4765625 }}>
        <span
          style={{
            position: "absolute",
            left: 14,
            top: 10.5,
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "Inter",
            color: "#6b7280",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Currency
        </span>
      </div>

      <div style={{ ...cellStyle, left: 777.1328125, width: 193.8046875 }}>
        <span
          style={{
            position: "absolute",
            left: 14,
            top: 10.5,
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "Inter",
            color: "#6b7280",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Status
        </span>
      </div>
    </div>
  );
}
