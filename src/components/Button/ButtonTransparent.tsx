import { ReactNode } from "react";
import type { ColorVariants } from "../../types";

export interface ButtonTransparentProps {
  variant: Exclude<ColorVariants, "primary">;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const ButtonTransparent = ({
  variant,
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonTransparentProps) => {
  const classNames = [
    "rounded-[7px] font-sans border transition-colors leading-none",
  ];

  const spacings = "py-1 px-4";
  const text = "text-sm text-primary focus:text-white dark:text-white";
  const backgroundColor = "bg-transparent";

  classNames.push(spacings, text, backgroundColor);

  switch (variant) {
    case "success":
      classNames.push(
        "text-primary hover:bg-success focus:bg-primary focus:text-success border-success",
        "dark:text-white dark:hover:bg-success"
      );
      break;
    case "warning":
      classNames.push(
        "text-primary hover:bg-warning focus:bg-primary focus:text-warning border-warning",
        "dark:text-white dark:hover:bg-warning"
      );
      break;
    case "danger":
      classNames.push(
        "text-primary hover:bg-danger focus:bg-primary focus:text-danger border-danger",
        "dark:text-white dark:hover:bg-danger"
      );
      break;
    case "info":
      classNames.push(
        "text-primary hover:bg-info focus:bg-primary focus:text-info border-info",
        "dark:text-white dark:hover:bg-info"
      );
      break;
    case "blue":
      classNames.push(
        "text-primary hover:bg-blue focus:bg-primary focus:text-blue border-blue",
        "dark:text-white dark:hover:bg-blue"
      );
      break;
  }

  if (disabled) {
    classNames.push("cursor-not-allowed opacity-50");
  }

  if (className) {
    classNames.push(className);
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames.join(" ")}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonTransparent;
