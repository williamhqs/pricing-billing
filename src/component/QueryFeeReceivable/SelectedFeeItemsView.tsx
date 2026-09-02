export default function SelectedFeeItemsView() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        paddingTop: 10,
        paddingRight: 14,
        paddingBottom: 10,
        paddingLeft: 14,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        backgroundColor: "#f8fafc",
        borderRadius: 4,
        border: "1px solid #e5e7eb",
        overflow: "hidden",
        marginBottom: 20,
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontWeight: 400,
          fontFamily: "Inter",
          color: "#000000",
          textAlign: "left",
          lineHeight: "19.5px",
          whiteSpace: "nowrap",
        }}
      >
        Total Fee Receivable: 1 record(s) | Total Amount: 9.50 CNY
      </span>
    </div>
  );
}
