import { type ChangeEventHandler, useId, useState } from "react";
import {
  FormFieldLabel,
  type LabelVisibility,
} from "../FormFieldLabel";

export interface TextareaProps {
  name: string;
  onChange?: (value: string) => void;
  /** When set, the textarea is controlled; the parent must update this from `onChange`. */
  value?: string;
  /** Initial value when uncontrolled (`value` omitted). Does not update after mount if `defaultValue` prop changes. */
  defaultValue?: string;
  placeholder?: string;
  label: string;
  /** Default `visible`. Use `sr-only` to hide the label visually while keeping it for assistive tech. */
  labelVisibility?: LabelVisibility;
  variant?: "primary" | "secondary" | "tertiary";
  rows?: number;
  maxLength?: number;
  required?: boolean;
  ariaLabel?: string;
  spellCheck?: boolean;
  disabled?: boolean;
  className?: string;
  /** Sets `data-testid` on the native `<textarea>` for e2e (e.g. Playwright). */
  testId?: string;
}

export const Textarea = ({
  name,
  onChange,
  value: valueProp,
  defaultValue,
  placeholder,
  label,
  labelVisibility = "visible",
  variant = "primary",
  rows = 4,
  maxLength,
  required = false,
  ariaLabel,
  spellCheck,
  disabled = false,
  className = "",
  testId,
}: TextareaProps) => {
  const labelId = useId();
  const isControlled = valueProp !== undefined;
  const [internalValue, setInternalValue] = useState(() => defaultValue ?? "");
  const [isFocused, setIsFocused] = useState(false);

  const value = isControlled ? valueProp : internalValue;

  const fieldClassNames = [
    "min-h-[6rem] resize-y rounded-sm font-sans z-10 w-full",
  ];

  const spacings = "py-4 px-5";
  const outline = "outline-hidden";

  fieldClassNames.push(spacings, outline);

  const inputWrapperClassNames = ["rounded-smb p-px w-full"];

  if (isFocused) {
    inputWrapperClassNames.push("bg-gradient");
  } else if (variant === "primary" || variant === "tertiary") {
    inputWrapperClassNames.push("bg-lightgray");
  }

  switch (variant) {
    case "primary":
      fieldClassNames.push("text-primary bg-neutral");
      break;
    case "secondary":
      fieldClassNames.push("text-neutral bg-neutral dark:bg-gray");
      break;
    case "tertiary":
      fieldClassNames.push("text-neutral bg-neutral dark:bg-primary");
      break;
  }

  if (disabled) {
    fieldClassNames.push("cursor-not-allowed opacity-50");
  }

  const onFieldChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const next = event.target.value;
    if (!isControlled) {
      setInternalValue(next);
    }
    onChange?.(next);
  };

  return (
    <div className={className}>
      <label htmlFor={name} className="block">
        <FormFieldLabel
          id={labelId}
          label={label}
          labelVisibility={labelVisibility}
        />

        <div className={inputWrapperClassNames.join(" ")}>
          <textarea
            id={name}
            name={name}
            rows={rows}
            placeholder={placeholder}
            value={value}
            className={fieldClassNames.join(" ")}
            autoComplete="off"
            onChange={onFieldChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            maxLength={maxLength}
            required={required}
            aria-label={ariaLabel}
            spellCheck={spellCheck}
            disabled={disabled}
            data-testid={testId}
          />
        </div>
      </label>
    </div>
  );
};

export default Textarea;
