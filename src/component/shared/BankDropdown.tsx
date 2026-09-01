import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  width?: number;
}

const BankDropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "请选择",
  width = 280,
}) => {
  const [open, setOpen] = useState(false);
  const [dropdownRect, setDropdownRect] = useState<DOMRect | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedItem = options.find((opt) => opt.value === value);

  // 点击空白关闭
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 打开时获取触发器位置，给portal弹窗定位
  useEffect(() => {
    if (open && triggerRef.current) {
      setDropdownRect(triggerRef.current.getBoundingClientRect());
    }
  }, [open]);

  const handleSelect = (v: string) => {
    onChange?.(v);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative" style={{ width }}>
      {/* 触发器 */}
      <div
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between h-9 px-3 bg-white border border-gray-200 rounded cursor-pointer font-Inter text-sm"
      >
        <span className={selectedItem ? "text-slate-800" : "text-gray-400"}>
          {selectedItem?.label ?? placeholder}
        </span>
        {/* 箭头 */}
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "5px solid #6b7280",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </div>

      {/* Portal：下拉面板挂载到body，不受父overflow限制 */}
      {open &&
        dropdownRect &&
        createPortal(
          <div
            style={{
              position: "fixed",
              left: dropdownRect.left,
              top: dropdownRect.bottom + 4,
              width: dropdownRect.width,
              zIndex: 9999,
            }}
            className="bg-white border border-gray-200 rounded shadow-md"
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className="px-3 py-2 text-sm font-Inter cursor-pointer hover:bg-gray-100"
              >
                {opt.label}
              </div>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
};

export default BankDropdown;
