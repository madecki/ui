import { ReactNode } from "react";

export interface ContentBoxProps {
  children: ReactNode;
  variant?: "info" | "warning" | "success" | "danger";
  icon?: ReactNode;
  className?: string;
}

const variantStyles = {
  info: "border-blue",
  warning: "border-warning",
  success: "border-success",
  danger: "border-danger",
};

export const ContentBox = ({
  children,
  variant = "info",
  icon,
  className = "",
}: ContentBoxProps) => {
  return (
    <div
      className={`relative border rounded-md my-9 ${variantStyles[variant]} ${className}`}
    >
      {icon && (
        <div className="absolute flex items-center justify-center p-3 -top-6 right-8 bg-primary border border-darkgray">
          {icon}
        </div>
      )}
      <div className="m-7">{children}</div>
    </div>
  );
};

export default ContentBox;
