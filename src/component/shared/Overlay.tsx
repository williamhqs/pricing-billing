// @shared/Overlay.tsx
interface OverlayProps {
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function Overlay({ visible, onClose, children }: OverlayProps) {
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-9999 flex items-center justify-center"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
