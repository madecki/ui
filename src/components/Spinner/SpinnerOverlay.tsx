import { Spinner, type SpinnerProps } from "./Spinner";

export interface SpinnerOverlayProps extends SpinnerProps {
  isVisible: boolean;
}

export const SpinnerOverlay = ({
  isVisible,
  size = "lg",
  className = "",
}: SpinnerOverlayProps) => {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-primary/80 z-50 ${className}`}
    >
      <Spinner size={size} />
    </div>
  );
};

export default SpinnerOverlay;
