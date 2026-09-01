import React, { useState, useEffect, useRef } from "react";

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

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "请选择",
  width = 280,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedItem = options.find((opt) => opt.value === value);

  // 点击空白关闭下拉（B端必备）
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

  const handleSelect = (v: string) => {
    onChange?.(v);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative" style={{ width }}>
      {/* 触发器：文字 + 右侧下拉箭头 */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between h-9 px-3 bg-white border border-gray-200 rounded cursor-pointer font-Inter text-sm"
      >
        <span className={selectedItem ? "text-slate-800" : "text-gray-400"}>
          {selectedItem?.label ?? placeholder}
        </span>
        {/* CSS 箭头，用内联样式，tailwind 不方便写三角 */}
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

      {/* 下拉面板 */}
      {open && (
        <div className="absolute left-0 top-[calc(100%+4px)] w-full bg-white border border-gray-200 rounded shadow-md z-[99]">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className="px-3 py-2 text-sm font-Inter cursor-pointer hover:bg-gray-100"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
