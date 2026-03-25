import { ReactNode } from "react";
import type { ColorVariants, Size } from "../../types";
import { getTagSurfaceClassNames } from "./tagSurfaceClassNames";

export interface TagProps {
  variant: ColorVariants;
  size?: Size;
  children?: ReactNode;
  label?: string;
  className?: string;
  /** Filled / selected background (non-interactive; no close icon). */
  filled?: boolean;
  /** Reduced emphasis. */
  muted?: boolean;
}

export const Tag = ({
  variant,
  size = "md",
  children,
  label,
  className = "",
  filled = false,
  muted = false,
}: TagProps) => {
  return (
    <span
      className={getTagSurfaceClassNames({
        variant,
        size,
        className,
        filled,
        muted,
      })}
    >
      {children || label}
    </span>
  );
};

export default Tag;
