import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { contentBoxVariantBorderClasses } from "../contentBoxVariants";

export type ToastVariant = "danger" | "success" | "info";

export type ToastPlacement =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

const placementClassNames: Record<ToastPlacement, string> = {
  "top-left": "top-5 left-5",
  "top-right": "top-5 right-5",
  "bottom-left": "bottom-5 left-5",
  "bottom-right": "bottom-5 right-5",
};

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export interface ToastProps {
  children: ReactNode;
  variant?: ToastVariant;
  placement?: ToastPlacement;
  /**
   * Time in milliseconds before the toast dismisses itself.
   * Pass `0` to disable auto-close. Default: `5000`.
   */
  autoCloseMs?: number;
  /** Called after the user closes the toast or auto-close fires. */
  onClose?: () => void;
  className?: string;
}

export const Toast = ({
  children,
  variant = "info",
  placement = "bottom-right",
  autoCloseMs = 5000,
  onClose,
  className = "",
}: ToastProps) => {
  const [open, setOpen] = useState(true);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const dismiss = useCallback(() => {
    setOpen(false);
    onCloseRef.current?.();
  }, []);

  useEffect(() => {
    if (!open || autoCloseMs <= 0) {
      return;
    }
    const id = window.setTimeout(dismiss, autoCloseMs);
    return () => window.clearTimeout(id);
  }, [open, autoCloseMs, dismiss]);

  if (!open) {
    return null;
  }

  const border = contentBoxVariantBorderClasses[variant];
  const live = variant === "danger" ? "assertive" : "polite";
  const role = variant === "danger" ? "alert" : "status";

  return (
    <div
      role={role}
      aria-live={live}
      className={`fixed z-50 flex max-w-sm gap-3 rounded-md border-2 bg-darkgray p-5 text-md text-white shadow-lg dark:bg-gray ${placementClassNames[placement]} ${border} ${className}`}
    >
      <div className="min-w-0 flex-1">{children}</div>
      <button
        type="button"
        onClick={dismiss}
        className="shrink-0 rounded-sm p-2 text-icongray transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        aria-label="Close"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default Toast;
