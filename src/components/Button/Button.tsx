import { ReactNode } from "react";
import type { ColorVariants, Size } from "../../types";

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
}: ButtonProps) => {
  if (typeof isActive === "boolean" && id === undefined) {
    throw Error("If button has isActive props, it must have id props too");
  }

  const classNames = [
    "relative flex gap-2 items-center rounded-sm font-sans border-2 transition-colors leading-none",
  ];

  const textColor = "text-primary focus:text-white";

  classNames.push(textColor);

  const activeBgMap: Partial<Record<ColorVariants, string>> = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",
    info: "bg-info",
    blue: "bg-blue",
  };

  const bg = isActive === true ? activeBgMap[variant] : "bg-neutral";

  switch (variant) {
    case "primary":
      classNames.push(
        `border-primary text-primary ${bg} focus:bg-primary`,
        isActive === true
          ? "dark:bg-neutral dark:text-primary"
          : "dark:text-white dark:bg-gray dark:hover:bg-neutral dark:hover:text-primary"
      );
      break;
    case "success":
      classNames.push(
        `border-success text-primary ${bg} focus:bg-primary focus:text-success`,
        isActive === true
          ? "dark:bg-success"
          : "dark:text-white dark:bg-gray dark:hover:bg-success"
      );
      break;
    case "warning":
      classNames.push(
        `border-warning text-primary ${bg} focus:bg-primary focus:text-warning`,
        isActive === true
          ? "dark:bg-warning"
          : "dark:text-white dark:bg-gray dark:hover:bg-warning"
      );
      break;
    case "danger":
      classNames.push(
        `border-danger text-primary ${bg} focus:bg-primary focus:text-danger`,
        isActive === true
          ? "dark:bg-danger"
          : "dark:text-white dark:bg-gray dark:hover:bg-danger"
      );
      break;
    case "info":
      classNames.push(
        `border-info text-primary ${bg} focus:bg-primary focus:text-info`,
        isActive === true
          ? "dark:bg-info"
          : "dark:text-white dark:bg-gray dark:hover:bg-info"
      );
      break;
    case "blue":
      classNames.push(
        `border-blue text-primary ${bg} focus:bg-primary focus:text-blue`,
        isActive === true
          ? "dark:bg-blue"
          : "dark:text-white dark:bg-gray dark:hover:bg-blue"
      );
      break;
  }

  switch (size) {
    case "xs":
      classNames.push("text-xs py-1 px-2");
      break;
    case "sm":
      classNames.push("text-sm py-1 px-4");
      break;
    case "md":
      classNames.push("text-md py-4 px-6");
      break;
    case "lg":
      classNames.push("text-lg py-5 px-8");
      break;
  }

  if (disabled) {
    classNames.push(
      "cursor-not-allowed hover:bg-neutral dark:hover:bg-neutral opacity-50"
    );
  }

  if (className) {
    classNames.push(className);
  }

  return (
    <button
      type={type}
      className={classNames.join(" ")}
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
