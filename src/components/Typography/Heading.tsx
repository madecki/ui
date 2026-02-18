import { ReactNode, createElement } from "react";

export interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "default" | "muted" | "primary" | "success" | "warning" | "danger";
  className?: string;
}

const sizeStyles = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
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

const defaultSizeByLevel = {
  1: "4xl",
  2: "3xl",
  3: "2xl",
  4: "xl",
  5: "lg",
  6: "md",
} as const;

export const Heading = ({
  children,
  level = 2,
  size,
  weight = "bold",
  color = "default",
  className = "",
}: HeadingProps) => {
  const tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const resolvedSize = size ?? defaultSizeByLevel[level];

  return createElement(
    tag,
    {
      className: `${sizeStyles[resolvedSize]} ${weightStyles[weight]} ${colorStyles[color]} ${className}`,
    },
    children
  );
};

export default Heading;
