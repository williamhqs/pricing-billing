import img_48922 from "../../assets/48922.png";
import type { FeeReceivableItem } from "../../types/types";

interface FeeReceivableTableRowProps {
  item: FeeReceivableItem;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
export function FeeReceivableTableRowView({
  item,
  checked,
  onChange,
}: FeeReceivableTableRowProps) {
  const cellStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    height: 47,
    border: "1px solid #e5e7eb",
    overflow: "hidden",
  };
  const cellText: React.CSSProperties = {
    position: "absolute",
    left: 14,
    top: 14.75,
    fontSize: 13,
    fontWeight: 400,
    fontFamily: "Inter",
    color: "#1a2a4a",
    lineHeight: "19.5px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "calc(100% - 28px)",
  };

  return (
    <div style={{ width: "100%", height: 47, position: "relative" }}>
      <div style={{ ...cellStyle, left: 0, width: 64.375 }}>
        <div
          onClick={() => onChange(!checked)}
          style={{
            position: "absolute",
            left: 14,
            top: 13,
            width: 16,
            height: 16,
            backgroundColor: checked ? "#e31e24" : "#ffffff",
            borderRadius: 2,
            border: "1px solid #767676",
            overflow: "hidden",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {checked && (
            <img
              src={img_48922}
              alt="Icon"
              style={{ width: 14, height: 14, objectFit: "cover" }}
            />
          )}
        </div>
      </div>

      <div style={{ ...cellStyle, left: 64.375, width: 180 }}>
        <span style={cellText} title={item.numberID}>
          {item.numberID}
        </span>
      </div>
      <div style={{ ...cellStyle, left: 244.375, width: 200 }}>
        <span style={cellText} title={item.name}>
          {item.name}
        </span>
      </div>
      <div style={{ ...cellStyle, left: 444.375, width: 228.28125 }}>
        <span style={{ ...cellText, fontWeight: 600 }} title={item.amount}>
          {item.amount}
        </span>
      </div>
      <div style={{ ...cellStyle, left: 672.65625, width: 104.4765625 }}>
        <span style={cellText} title={item.currency}>
          {item.currency}
        </span>
      </div>
      <div style={{ ...cellStyle, left: 777.1328125, width: 193.8046875 }}>
        <div
          style={{
            position: "absolute",
            left: 14,
            top: 12.5,
            width: 123.8203125,
            height: 22,
            backgroundColor: "#fef3c7",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 8,
              top: 2.5,
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#b45309",
              lineHeight: "18px",
              whiteSpace: "nowrap",
            }}
          >
            {item.status}
          </span>
        </div>
      </div>
    </div>
  );
}
