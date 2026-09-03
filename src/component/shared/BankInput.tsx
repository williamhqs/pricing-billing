interface InputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  width?: number | string;
  height?: number;
  type?: string;
  step?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const BankInput: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  width = 280,
  height = 36,
  type = "text",
  step,
  style,
  className,
}) => {
  const defaultStyle: React.CSSProperties = {
    width,
    height,
    padding: "0 12px",
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Inter",
    color: "#1a2a4a",
    borderRadius: 4,
    border: "1px solid #e5e7eb",
    outline: "none",
  };

  return (
    <input
      type={type}
      step={step}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{ ...defaultStyle, ...style }}
      className={className ?? ""}
      onClick={(e) => e.stopPropagation()}
    />
  );
};
