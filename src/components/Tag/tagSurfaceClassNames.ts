import type { ColorVariants, Size } from "../../types";

export interface TagSurfaceOptions {
  variant: ColorVariants;
  size?: Size;
  className?: string;
  /** Filled / selected background. */
  filled?: boolean;
  /** Muted styling (lower emphasis). */
  muted?: boolean;
  /**
   * When true (e.g. `Button`), include hover affordances. Tags default to false — non-interactive,
   * no `:hover` styles.
   */
  interactive?: boolean;
}

/**
 * Canonical Tailwind surface for `Tag`. `Button` imports this for the same look, then adds
 * interaction (`<button>`, click handling, optional close icon when active).
 */
export function getTagSurfaceClassNames({
  variant,
  size = "md",
  className = "",
  filled = false,
  muted = false,
  interactive = false,
}: TagSurfaceOptions): string {
  const classNames = [
    "relative flex gap-2 items-center rounded-sm font-sans border-2 transition-colors leading-none",
  ];

  const textColor = "text-primary focus:text-white";

  classNames.push(textColor);

  const activeBgMap: Partial<Record<ColorVariants, string>> = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",
    info: "bg-info",
    blue: "bg-blue",
  };

  const bg = filled === true ? activeBgMap[variant] : "bg-neutral";

  switch (variant) {
    case "primary":
      classNames.push(
        `border-primary text-primary ${bg} focus:bg-primary`,
        filled === true
          ? "dark:bg-neutral dark:text-primary"
          : interactive
            ? "dark:text-white dark:bg-gray dark:hover:bg-neutral dark:hover:text-primary"
            : "dark:text-white dark:bg-gray"
      );
      break;
    case "success":
      classNames.push(
        `border-success text-primary ${bg} focus:bg-primary focus:text-success`,
        filled === true
          ? "dark:bg-success"
          : interactive
            ? "dark:text-white dark:bg-gray dark:hover:bg-success"
            : "dark:text-white dark:bg-gray"
      );
      break;
    case "warning":
      classNames.push(
        `border-warning text-primary ${bg} focus:bg-primary focus:text-warning`,
        filled === true
          ? "dark:bg-warning"
          : interactive
            ? "dark:text-white dark:bg-gray dark:hover:bg-warning"
            : "dark:text-white dark:bg-gray"
      );
      break;
    case "danger":
      classNames.push(
        `border-danger text-primary ${bg} focus:bg-primary focus:text-danger`,
        filled === true
          ? "dark:bg-danger"
          : interactive
            ? "dark:text-white dark:bg-gray dark:hover:bg-danger"
            : "dark:text-white dark:bg-gray"
      );
      break;
    case "info":
      classNames.push(
        `border-info text-primary ${bg} focus:bg-primary focus:text-info`,
        filled === true
          ? "dark:bg-info"
          : interactive
            ? "dark:text-white dark:bg-gray dark:hover:bg-info"
            : "dark:text-white dark:bg-gray"
      );
      break;
    case "blue":
      classNames.push(
        `border-blue text-primary ${bg} focus:bg-primary focus:text-blue`,
        filled === true
          ? "dark:bg-blue"
          : interactive
            ? "dark:text-white dark:bg-gray dark:hover:bg-blue"
            : "dark:text-white dark:bg-gray"
      );
      break;
  }

  switch (size) {
    case "xs":
      classNames.push("text-xs py-1 px-2");
      break;
    case "sm":
      classNames.push("text-sm py-1 px-4");
      break;
    case "md":
      classNames.push("text-md py-4 px-6");
      break;
    case "lg":
      classNames.push("text-lg py-5 px-8");
      break;
  }

  if (muted) {
    classNames.push(
      interactive
        ? "cursor-not-allowed hover:bg-neutral dark:hover:bg-neutral opacity-50"
        : "cursor-default opacity-50"
    );
  }

  if (interactive && !muted) {
    classNames.push("cursor-pointer");
  }

  if (className) {
    classNames.push(className);
  }

  return classNames.join(" ");
}
