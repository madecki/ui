import { ReactNode } from "react";

export interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const GradientButton = ({
  children,
  onClick,
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}: GradientButtonProps) => {
  const innerClassNames = "bg-darkgray rounded-sm text-white w-full h-full";
  
  let paddings = "py-4 px-6";
  switch (size) {
    case "sm":
      paddings = "py-2 px-4";
      break;
    case "md":
      paddings = "py-4 px-6";
      break;
    case "lg":
      paddings = "py-5 px-8";
      break;
  }

  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`overflow-hidden rounded-smb bg-gradient p-px h-full cursor-pointer ${
        disabled ? "grayscale cursor-not-allowed" : ""
      } ${className}`}
    >
      <button
        type={type}
        disabled={disabled}
        className={[innerClassNames, paddings].join(" ")}
      >
        {children}
      </button>
    </div>
  );
};

export default GradientButton;
