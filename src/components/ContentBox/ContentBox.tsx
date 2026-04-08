import { ReactNode } from "react";
import {
  contentBoxVariantBorderClasses,
  type ContentBoxVariant,
} from "../contentBoxVariants";

export interface ContentBoxProps {
  children: ReactNode;
  variant?: ContentBoxVariant;
  icon?: ReactNode;
  className?: string;
}

export const ContentBox = ({
  children,
  variant = "info",
  icon,
  className = "",
}: ContentBoxProps) => {
  return (
    <div
      className={`relative border rounded-md my-9 ${contentBoxVariantBorderClasses[variant]} ${className}`}
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
