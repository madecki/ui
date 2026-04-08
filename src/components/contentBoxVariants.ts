export type ContentBoxVariant = "info" | "warning" | "success" | "danger";

export const contentBoxVariantBorderClasses: Record<ContentBoxVariant, string> =
  {
    info: "border-blue",
    warning: "border-warning",
    success: "border-success",
    danger: "border-danger",
  };
