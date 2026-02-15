import { ReactNode } from "react";

export interface BlockQuoteProps {
  children: ReactNode;
  className?: string;
}

export const BlockQuote = ({ children, className = "" }: BlockQuoteProps) => {
  return (
    <blockquote
      className={`bg-darkgray p-7 my-7 border-2 border-gray rounded-sm font-sans text-neutral dark:text-white ${className}`}
    >
      {children}
    </blockquote>
  );
};

export default BlockQuote;
