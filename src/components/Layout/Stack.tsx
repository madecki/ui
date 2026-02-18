import { ReactNode } from "react";

export interface StackProps {
  children: ReactNode;
  gap?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  direction?: "vertical" | "horizontal";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  wrap?: boolean;
  className?: string;
}

const gapStyles = {
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "7": "gap-7",
  "8": "gap-8",
  "9": "gap-9",
  "10": "gap-10",
};

const alignStyles = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyStyles = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

export const Stack = ({
  children,
  gap = "4",
  direction = "vertical",
  align = "stretch",
  justify = "start",
  wrap = false,
  className = "",
}: StackProps) => {
  const directionClass = direction === "vertical" ? "flex-col" : "flex-row";
  const wrapClass = wrap ? "flex-wrap" : "";

  return (
    <div
      className={`flex ${directionClass} ${gapStyles[gap]} ${alignStyles[align]} ${justifyStyles[justify]} ${wrapClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Stack;
