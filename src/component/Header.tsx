export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 0,
        paddingTop: 0,
        paddingRight: 28,
        paddingBottom: 0,
        paddingLeft: 28,
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: 56,
        backgroundColor: "#1a2a4a",
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
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Inter",
            color: "#000000",
            textAlign: "left",
            lineHeight: "21px",
            whiteSpace: "nowrap",
          }}
        >
          Teller: Zhang Ming
        </span>
      </div>
    </div>
  );
}
