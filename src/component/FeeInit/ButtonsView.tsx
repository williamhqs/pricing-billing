export default function ButtonsView({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 12,
        paddingTop: 16,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        width: 1044,
        height: 56,
        marginBottom: 36
      }}
    >
      <button
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          paddingTop: 0,
          paddingRight: 22,
          paddingBottom: 0,
          paddingLeft: 22,
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          backgroundColor: "#ffffff",
          borderRadius: 4,
          border: "1px solid #cbd5e1",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "Inter",
            color: "#1a2a4a",
            textAlign: "center",
            lineHeight: "21px",
            whiteSpace: "nowrap",
          }}
        >
          Reset
        </span>
      </button>
      <button
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          paddingTop: 0,
          paddingRight: 22,
          paddingBottom: 0,
          paddingLeft: 22,
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          backgroundColor: "#e31e24",
          borderRadius: 4,
          border: "1px solid #e31e24",
          overflow: "hidden",
        }}
        onClick={onConfirm}
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
          Submit
        </span>
      </button>
    </div>
  );
}
