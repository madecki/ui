export interface HeartProps {
  variant?: "outline" | "filled" | "gradient";
  className?: string;
  size?: number;
}

export const Heart = ({
  variant = "outline",
  className = "",
  size = 23,
}: HeartProps) => {
  if (variant === "filled") {
    return (
      <svg
        width={size}
        height={(size * 19) / 23}
        viewBox="0 0 23 19"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.49104 2.55471C3.44605 1.6 4.74114 1.06367 6.09152 1.06367C7.44189 1.06367 8.73698 1.6 9.69199 2.55471L11.1841 4.04557L12.6763 2.55471C13.146 2.06832 13.708 1.68035 14.3293 1.41345C14.9506 1.14655 15.6189 1.00607 16.295 1.00019C16.9712 0.994314 17.6418 1.12317 18.2677 1.37923C18.8936 1.63529 19.4622 2.01343 19.9403 2.49159C20.4185 2.96975 20.7966 3.53835 21.0527 4.16421C21.3087 4.79007 21.4376 5.46066 21.4317 6.13686C21.4258 6.81305 21.2853 7.4813 21.0184 8.10262C20.7516 8.72394 20.3636 9.28588 19.8772 9.75565L12.5984 17.0355C11.8174 17.8167 10.5509 17.8167 9.7698 17.0355L2.49104 9.75565C1.53633 8.80065 1 7.50556 1 6.15518C1 4.80481 1.53633 3.50972 2.49104 2.55471Z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === "gradient") {
    return (
      <svg
        width={size}
        height={(size * 19) / 23}
        viewBox="0 0 23 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.49104 2.55471C3.44605 1.6 4.74114 1.06367 6.09152 1.06367C7.44189 1.06367 8.73698 1.6 9.69199 2.55471L11.1841 4.04557L12.6763 2.55471C13.146 2.06832 13.708 1.68035 14.3293 1.41345C14.9506 1.14655 15.6189 1.00607 16.295 1.00019C16.9712 0.994314 17.6418 1.12317 18.2677 1.37923C18.8936 1.63529 19.4622 2.01343 19.9403 2.49159C20.4185 2.96975 20.7966 3.53835 21.0527 4.16421C21.3087 4.79007 21.4376 5.46066 21.4317 6.13686C21.4258 6.81305 21.2853 7.4813 21.0184 8.10262C20.7516 8.72394 20.3636 9.28588 19.8772 9.75565L12.5984 17.0355C11.8174 17.8167 10.5509 17.8167 9.7698 17.0355L2.49104 9.75565C1.53633 8.80065 1 7.50556 1 6.15518C1 4.80481 1.53633 3.50972 2.49104 2.55471Z"
          stroke="url(#paint0_radial_heart)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <defs>
          <radialGradient
            id="paint0_radial_heart"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1.01602 16.6647) rotate(-32.7891) scale(24.2852 19.4645)"
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

  // Default: outline
  return (
    <svg
      width={size}
      height={(size * 19) / 23}
      viewBox="0 0 23 19"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.49104 2.55471C3.44605 1.6 4.74114 1.06367 6.09152 1.06367C7.44189 1.06367 8.73698 1.6 9.69199 2.55471L11.1841 4.04557L12.6763 2.55471C13.146 2.06832 13.708 1.68035 14.3293 1.41345C14.9506 1.14655 15.6189 1.00607 16.295 1.00019C16.9712 0.994314 17.6418 1.12317 18.2677 1.37923C18.8936 1.63529 19.4622 2.01343 19.9403 2.49159C20.4185 2.96975 20.7966 3.53835 21.0527 4.16421C21.3087 4.79007 21.4376 5.46066 21.4317 6.13686C21.4258 6.81305 21.2853 7.4813 21.0184 8.10262C20.7516 8.72394 20.3636 9.28588 19.8772 9.75565L12.5984 17.0355C11.8174 17.8167 10.5509 17.8167 9.7698 17.0355L2.49104 9.75565C1.53633 8.80065 1 7.50556 1 6.15518C1 4.80481 1.53633 3.50972 2.49104 2.55471Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart;
