export interface ShareProps {
  variant?: "default" | "gradient";
  className?: string;
  size?: number;
}

export const Share = ({
  variant = "default",
  className = "",
  size = 20,
}: ShareProps) => {
  if (variant === "gradient") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M12.8586 3.64258L17.8586 8.64258L12.8586 13.6426"
          stroke="url(#paint0_radial_share)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.8586 8.64258H6.85864C4.09721 8.64258 1.85864 10.8812 1.85864 13.6426V17.6426"
          stroke="url(#paint1_radial_share)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <radialGradient
            id="paint0_radial_share"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(12.8716 13.3236) rotate(-72.2554) scale(11.4659 5.85856)"
          >
            <stop stopColor="#EDA867" />
            <stop offset="0.23" stopColor="#EDA867" />
            <stop offset="0.59" stopColor="#CB5065" />
            <stop offset="0.96" stopColor="#714E8E" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_share"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1.87434 17.2831) rotate(-52.5553) scale(19.0816 18.8095)"
          >
            <stop stopColor="#EDA867" />
            <stop offset="0.23" stopColor="#EDA867" />
            <stop offset="0.59" stopColor="#CB5065" />
            <stop offset="0.96" stopColor="#714E8E" />
          </radialGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.8586 3.64258L17.8586 8.64258L12.8586 13.6426"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8586 8.64258H6.85864C4.09721 8.64258 1.85864 10.8812 1.85864 13.6426V17.6426"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Share;
