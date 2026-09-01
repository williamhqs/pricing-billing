export default function BannerView() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        marginTop: 12,
        paddingTop: 12,
        paddingRight: 16,
        paddingBottom: 12,
        paddingLeft: 16,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        backgroundColor: "#f0fdf4",
        borderRadius: 4,
        border: "1px solid #16a34a",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontWeight: 400,
          fontFamily: "Inter",
          color: "#1a2a4a",
          textAlign: "left",
          lineHeight: "19.5px",
          whiteSpace: "nowrap",
        }}
      >
        Fee calculation completed. Business Reference No.: BIZ20260901226302
      </span>
    </div>
  );
}
