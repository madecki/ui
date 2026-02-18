import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  centered?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-full",
};

export const Container = ({
  children,
  size = "lg",
  centered = true,
  className = "",
}: ContainerProps) => {
  const centeredClass = centered ? "mx-auto" : "";

  return (
    <div
      className={`w-full px-5 ${sizeStyles[size]} ${centeredClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
