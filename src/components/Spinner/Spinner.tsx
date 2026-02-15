export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Spinner = ({ size = "md", className = "" }: SpinnerProps) => {
  let dimensions = "w-16 h-16";
  let borderWidth = "border-[6px]";

  switch (size) {
    case "sm":
      dimensions = "w-8 h-8";
      borderWidth = "border-[3px]";
      break;
    case "md":
      dimensions = "w-16 h-16";
      borderWidth = "border-[6px]";
      break;
    case "lg":
      dimensions = "w-24 h-24";
      borderWidth = "border-8";
      break;
  }

  return (
    <div
      className={`inline-block ${dimensions} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div
        className={`${dimensions} ${borderWidth} border-white border-t-transparent border-b-transparent rounded-full animate-spin`}
      />
    </div>
  );
};

export default Spinner;
