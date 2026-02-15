export interface WarningProps {
  className?: string;
  size?: number;
}

export const Warning = ({ className = "", size = 22 }: WarningProps) => {
  return (
    <svg
      width={size}
      height={(size * 23) / 22}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 1L20.5263 16.8125H1.47372L11 1Z"
        fill="#EDA867"
        stroke="#EDA867"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9268 10.6249L10.9268 7.15992M10.9268 13.1932L10.9268 13.2236"
        stroke="#FCFAF7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Warning;
