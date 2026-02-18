import { ReactNode } from "react";

export interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  className?: string;
}

const colStyles = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

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

export const Grid = ({
  children,
  cols = 3,
  gap = "5",
  className = "",
}: GridProps) => {
  return (
    <div className={`grid ${colStyles[cols]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
};

export interface GridItemProps {
  children: ReactNode;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | "full";
  className?: string;
}

const colSpanStyles = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  12: "col-span-12",
  full: "col-span-full",
};

export const GridItem = ({
  children,
  colSpan = 1,
  className = "",
}: GridItemProps) => {
  return (
    <div className={`${colSpanStyles[colSpan]} ${className}`}>{children}</div>
  );
};

export default Grid;
