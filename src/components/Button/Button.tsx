import { type AriaRole, type ReactNode } from "react";
import type { ColorVariants, Size } from "../../types";
import { getTagSurfaceClassNames } from "../Tag/tagSurfaceClassNames";

export interface ButtonProps {
  variant: ColorVariants;
  size?: Size;
  children?: ReactNode;
  onClick?: (id?: string) => void;
  isActive?: boolean;
  label?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  /** e.g. `radio` when used inside a `radiogroup` */
  role?: AriaRole;
  ariaChecked?: boolean | "mixed";
}

export const Button = ({
  variant,
  size = "md",
  children,
  onClick,
  isActive,
  id,
  label,
  disabled,
  className = "",
  type = "button",
  role,
  ariaChecked,
}: ButtonProps) => {
  if (typeof isActive === "boolean" && id === undefined) {
    throw Error("If button has isActive props, it must have id props too");
  }

  const surfaceClassName = getTagSurfaceClassNames({
    variant,
    size,
    className,
    filled: isActive === true,
    muted: Boolean(disabled),
    interactive: true,
  });

  return (
    <button
      type={type}
      role={role}
      aria-checked={ariaChecked}
      className={surfaceClassName}
      onClick={() => {
        if (isActive === true) {
          onClick?.();
        } else {
          onClick?.(id);
        }
      }}
      disabled={disabled}
    >
      {children || label}
      {isActive === true && (
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
