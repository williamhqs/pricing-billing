export default function ConfirmView({
  totalAmount,
  onConfirm,
  onCancel,
}: {
  totalAmount?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
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
        width: 640,
        height: 213.296875,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        boxShadow: "0px 12px 40px #1a2a4a2e",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 4,
          backgroundColor: "#e31e24",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          paddingTop: 16,
          paddingRight: 20,
          paddingBottom: 16,
          paddingLeft: 20,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          border: "1px solid #e5e7eb",
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "Inter",
            color: "#1a2a4a",
            textAlign: "left",
            lineHeight: "22.5px",
            whiteSpace: "nowrap",
          }}
        >
          Confirm
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          paddingTop: 20,
          paddingRight: 20,
          paddingBottom: 20,
          paddingLeft: 20,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <span
          style={{
            width: 400,
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Inter",
            color: "#374151",
            textAlign: "left",
            lineHeight: "22.399999618530273px",
            whiteSpace: "nowrap",
          }}
        >
          Selected 1 fee receivable record(s). Total amount: {totalAmount} CNY.
          Continue to Fee Collection?
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          paddingTop: 14,
          paddingRight: 20,
          paddingBottom: 14,
          paddingLeft: 20,
          justifyContent: "flex-end",
          alignItems: "flex-start",
          width: "100%",
          border: "1px solid #e5e7eb",
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
          onClick={onCancel}
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
            Cancel
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
          className="hover:bg-[#C4181E] bg-[#e31e24]"
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
            Confirm
          </span>
        </button>
      </div>
    </div>
  );
}
