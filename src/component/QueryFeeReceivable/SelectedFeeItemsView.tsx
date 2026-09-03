interface SelectedFeeItemsViewProps {
  totalRecords: number;
  totalAmount: string;
  currency?: string;
}

export default function SelectedFeeItemsView({
  totalRecords,
  totalAmount,
  currency = "CNY",
}: SelectedFeeItemsViewProps) {
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
        Total Fee Receivable: {totalRecords} record(s) | Total Amount: {totalAmount} {currency}
      </span>
    </div>
  );
}
