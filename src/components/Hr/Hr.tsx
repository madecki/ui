export interface HrProps {
  className?: string;
}

export const Hr = ({ className = "" }: HrProps) => {
  const defaultClassNames = "border border-gray my-4";

  return <hr className={`${defaultClassNames} ${className}`} />;
};

export default Hr;
