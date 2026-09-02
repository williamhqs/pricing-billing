// @shared/TwoActionMenu.tsx

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
    <nav
      style={{
        display: "flex",
        alignItems: "stretch",
        height: 64,
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#fff",
      }}
    >
      {items.map((item) => {
        const isActive = activeKey === item.key;

        return (
          <button
            key={item.key}
            onClick={item.onClick}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              padding: "0 24px",

              border: "none",
              background: "transparent",

              fontFamily: "Inter, sans-serif",
              fontSize: 15,
              fontWeight: isActive ? 600 : 500,

              color: isActive ? "#002D62" : "#333",

              cursor: "pointer",

              transition: "color 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = "#f7f8fa";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {item.label}

            {isActive && (
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 3,
                  backgroundColor: "#E31837",
                }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
