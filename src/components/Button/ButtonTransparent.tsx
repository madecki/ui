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
      const successLight =
        "text-primary hover:bg-success focus:bg-primary focus:text-success border-success";
      const successDark = "dark:text-white dark:hover:bg-success";
      classNames.push(successLight, successDark);
      break;
    case "warning":
      const warningLight =
        "text-primary hover:bg-warning focus:bg-primary focus:text-warning border-warning";
      const warningDark = "dark:text-white dark:hover:bg-warning";
      classNames.push(warningLight, warningDark);
      break;
    case "danger":
      const dangerLight =
        "text-primary hover:bg-danger focus:bg-primary focus:text-danger border-danger";
      const dangerDark = "dark:text-white dark:hover:bg-danger";
      classNames.push(dangerLight, dangerDark);
      break;
    case "info":
      const infoLight =
        "text-primary hover:bg-info focus:bg-primary focus:text-info border-info";
      const infoDark = "dark:text-white dark:hover:bg-info";
      classNames.push(infoLight, infoDark);
      break;
    case "blue":
      const blueLight =
        "text-primary hover:bg-blue focus:bg-primary focus:text-blue border-blue";
      const blueDark = "dark:text-white dark:hover:bg-blue";
      classNames.push(blueLight, blueDark);
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
