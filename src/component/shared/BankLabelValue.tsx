// Shared/LabelValueField.tsx
import React from "react";

interface LabelValueFieldProps {
  label: string;
  value: string;
}

const BankLabelValue: React.FC<LabelValueFieldProps> = ({ label, value }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        padding: 0,
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
        {label}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          padding: 0,
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
          {value}
        </span>
      </div>
    </div>
  );
};

export default BankLabelValue;
