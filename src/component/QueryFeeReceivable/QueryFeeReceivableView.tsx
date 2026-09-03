import { useState } from "react";
import SelectedFeeItemsView from "./SelectedFeeItemsView";
import { FeeReceivableTableRowView } from "./FeeReceivableTableRowView";
import { FeeReceivableTableHeaderView } from "./FeeReceivableTableHeaderView";
import type { FeeReceivableItem } from "../../types/types";
import { BankInput } from "../shared/BankInput";

export default function QueryFeeReceivableView({
  onProceed,
}: {
  onProceed: () => void;
}) {
  const [feeReceivableItems, setFeeReceivableItems] = useState<
    FeeReceivableItem[]
  >([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const addFeeItem = () => {
    const newItem: FeeReceivableItem = {
      numberID: `F-${Date.now()}`,
      name: "New Fee Item",
      amount: "500.00",
      currency: "SGD",
      status: "Pending",
    };

    setFeeReceivableItems((prev) => [...prev, newItem]);
  };

  const removeFeeItem = (deleteNumberID: string) => {
    setFeeReceivableItems((prev) =>
      prev.filter((item) => item.numberID !== deleteNumberID),
    );
  };

  const isAllSelected =
    feeReceivableItems.length > 0 &&
    selectedIds.length === feeReceivableItems.length;
  const handleHeaderSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(feeReceivableItems.map((item) => item.numberID));
    }
  };

  const handleRowCheckChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((x) => x !== id));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        paddingTop: 20,
        paddingRight: 28,
        paddingBottom: 48,
        paddingLeft: 28,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: 1100,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 18,
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 0.5,
            width: 119,
            height: 18,
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            color: "#9ca3af",
            textAlign: "left",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Transaction Services
        </span>
        <span
          style={{
            position: "absolute",
            left: 125.0703125,
            top: 0.5,
            width: 8,
            height: 18,
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            color: "#cbd5e1",
            textAlign: "left",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        ></span>
        <span
          style={{
            position: "absolute",
            left: 139.015625,
            top: 0.5,
            width: 81,
            height: 18,
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            color: "#9ca3af",
            textAlign: "left",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Fee Collection
        </span>
        <span
          style={{
            position: "absolute",
            left: 225.734375,
            top: 0.5,
            width: 8,
            height: 18,
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            color: "#cbd5e1",
            textAlign: "left",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        ></span>
        <span
          style={{
            position: "absolute",
            left: 239.6796875,
            top: 0.5,
            width: 125,
            height: 18,
            fontSize: 12,
            fontWeight: 500,
            fontFamily: "Inter",
            color: "#1a2a4a",
            textAlign: "left",
            lineHeight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Query Fee Receivable
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          paddingTop: 16,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: 1044,
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
            width: "100%",
            height: 182,
            backgroundColor: "#ffffff",
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            boxShadow: "0px 1px 2px #1a2a4a0a",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              paddingTop: 12,
              paddingRight: 20,
              paddingBottom: 12,
              paddingLeft: 20,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              border: "1px solid #e5e7eb",
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "Inter",
                color: "#1a2a4a",
                textAlign: "left",
                lineHeight: "21px",
                whiteSpace: "nowrap",
              }}
            >
              Query Criteria
            </span>
          </div>

          <div className="flex flex-col gap-5 p-5 w-full items-start">
            <div className="flex flex-row justify-between w-full items-start">
              <div className="flex flex-col gap-1.5 whitespace-nowrap">
                <span className="text-xs font-medium font-Inter text-gray-500">
                  Business Reference No.
                </span>
                <BankInput
                  style={{ fontSize: 14, fontWeight: 500 }}
                  value={"BIZ20260829000001"}
                  onChange={() => {}}
                />
              </div>
              <div className="flex flex-col gap-1.5 whitespace-nowrap">
                <span className="text-xs font-medium font-Inter text-gray-500">
                  Customer No.
                </span>
                <BankInput
                  style={{ fontSize: 14, fontWeight: 500 }}
                  value={"20260330000002"}
                  onChange={() => {}}
                />
              </div>
              <div className="flex flex-col gap-1.5 whitespace-nowrap">
                <span className="text-xs font-medium font-Inter text-gray-500">
                  Customer Account No.
                </span>
                <BankInput
                  style={{ fontSize: 14, fontWeight: 500 }}
                  value={"622200000000000000"}
                  onChange={() => {}}
                />
              </div>
              <button
                className="flex flex-row gap-2 px-5.5 h-10 justify-center items-center bg-[#e31e24] rounded border border-[#e31e24] overflow-hidden whitespace-nowrap"
                onClick={addFeeItem}
              >
                <span className="text-sm font-semibold font-Inter text-white text-center leading-5.25">
                  Query
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            paddingTop: 16,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
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
              width: "100%",
              backgroundColor: "#ffffff",
              borderRadius: 6,
              border: "1px solid #e5e7eb",
              boxShadow: "0px 1px 2px #1a2a4a0a",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                paddingTop: 12,
                paddingRight: 20,
                paddingBottom: 12,
                paddingLeft: 20,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
                border: "1px solid #e5e7eb",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "Inter",
                  color: "#1a2a4a",
                  textAlign: "left",
                  lineHeight: "21px",
                  whiteSpace: "nowrap",
                }}
              >
                Fee Receivable List
              </span>
            </div>
            {feeReceivableItems.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  paddingTop: 60,
                  paddingRight: 44,
                  paddingBottom: 60,
                  paddingLeft: 44,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 1042,
                  height: 140,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    fontFamily: "Inter",
                    color: "#9ca3af",
                    textAlign: "center",
                    lineHeight: "19.5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Please click 'Query' to retrieve fee receivable records.
                </span>
              </div>
            ) : (
              <div className="px-8 pt-5 mb-5">
                <SelectedFeeItemsView />

                <FeeReceivableTableHeaderView
                  checkedAll={isAllSelected}
                  onSelectAll={handleHeaderSelectAll}
                />
                {feeReceivableItems.map((item) => (
                  <FeeReceivableTableRowView
                    key={item.numberID}
                    item={item}
                    checked={selectedIds.includes(item.numberID)}
                    onChange={(chk) => handleRowCheckChange(item.numberID, chk)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
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
              backgroundColor: selectedIds.length === 0 ? "#d1d5db" : "#e31e24",
              borderRadius: 4,
              border: "1px solid #d1d5db",
              overflow: "hidden",
            }}
            disabled={selectedIds.length === 0}
            onClick={onProceed}
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
              Proceed to Fee Collection
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
