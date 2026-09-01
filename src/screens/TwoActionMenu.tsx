// @shared/TwoActionMenu.tsx
import React from "react";

interface MenuItem {
  key: string;
  label: string;
  onClick: () => void;
}

interface TwoActionMenuProps {
  items: MenuItem[];
  activeKey?: string;
}

export function TwoActionMenu({ items, activeKey }: TwoActionMenuProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
      }}
    >
      {items.map((item) => {
        const isActive = activeKey === item.key;
        return (
          <button
            key={item.key}
            onClick={item.onClick}
            style={{
              padding: "8px 16px",
              border: isActive ? "2px solid #1a2a4a" : "1px solid #e5e7eb",
              borderRadius: 6,
              background: isActive ? "#eff6ff" : "#fff",
              fontFamily: "Inter",
              cursor: "pointer",
              color: isActive ? "#1a2a4a" : "#333",
              fontWeight: isActive ? 500 : 400,
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
