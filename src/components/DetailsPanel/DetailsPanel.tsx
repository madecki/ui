import { ReactNode, useState } from "react";
import {
  contentBoxVariantBorderClasses,
  type ContentBoxVariant,
} from "../contentBoxVariants";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface DetailsPanelProps {
  /** Label / title row for the native `<summary>` element. */
  summary: ReactNode;
  /** Shown when the panel is expanded (native `<details>` body). */
  children: ReactNode;
  variant?: ContentBoxVariant;
  /** Optional icon before the summary text (ContentBox-style affordance, inline). */
  icon?: ReactNode;
  /** Initial open state; panel remains toggleable (state synced via `onToggle`). */
  defaultOpen?: boolean;
  className?: string;
  id?: string;
}

export const DetailsPanel = ({
  summary,
  children,
  variant = "info",
  icon,
  defaultOpen = false,
  className = "",
  id,
}: DetailsPanelProps) => {
  const border = contentBoxVariantBorderClasses[variant];
  const [open, setOpen] = useState(defaultOpen);

  return (
    <details
      id={id}
      className={`group relative border rounded-md my-9 ${border} ${className}`}
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
    >
      <summary
        className={
          "flex cursor-pointer list-none items-center gap-3 p-7 text-white outline-none transition-colors " +
          "hover:bg-darkgray/40 dark:hover:bg-white/5 " +
          "focus-visible:ring-2 focus-visible:ring-blue " +
          "group-open:pb-3 [&::-webkit-details-marker]:hidden"
        }
      >
        <ChevronDown className="size-5 shrink-0 text-icongray transition-transform group-open:rotate-180" />
        {icon ? <span className="flex shrink-0 items-center">{icon}</span> : null}
        <span className="min-w-0 flex-1 text-md font-medium text-white dark:text-white">
          {summary}
        </span>
      </summary>
      <div className="border-t border-gray px-7 pb-7 pt-3 dark:border-gray">
        {children}
      </div>
    </details>
  );
};

export default DetailsPanel;
