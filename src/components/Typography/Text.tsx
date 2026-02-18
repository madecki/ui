import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "default" | "muted" | "primary" | "success" | "warning" | "danger";
  as?: "p" | "span" | "div" | "label";
  className?: string;
}

const sizeStyles = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

const weightStyles = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorStyles = {
  default: "text-white dark:text-white",
  muted: "text-lightgray dark:text-lightgray",
  primary: "text-primary dark:text-white",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
};

export const Text = ({
  children,
  size = "md",
  weight = "normal",
  color = "default",
  as: Tag = "p",
  className = "",
}: TextProps) => {
  return (
    <Tag
      className={`${sizeStyles[size]} ${weightStyles[weight]} ${colorStyles[color]} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Text;
