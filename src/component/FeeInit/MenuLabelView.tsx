export default function MenuLabelView() {
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
        marginTop: 8,
        marginBottom: 8,
      }}
    >
      <span
        style={{
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "Inter",
          color: "#1a2a4a",
          textAlign: "left",
          lineHeight: "30px",
          whiteSpace: "nowrap",
        }}
      >
        Domestic Transfer
      </span>
    </div>
  );
}
