import {
  type ChangeEventHandler,
  type HTMLInputTypeAttribute,
  type ReactNode,
  useState,
} from "react";

export interface InputProps {
  name: string;
  onChange?: (value: string) => void;
  /** When set, the input is controlled; the parent must update this from `onChange`. */
  value?: string;
  /** Initial value when uncontrolled (`value` omitted). Does not update after mount if `defaultValue` prop changes. */
  defaultValue?: string;
  placeholder?: string;
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  /** Any standard HTML `input` type (e.g. `date`, `time`, `email`). */
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
  required?: boolean;
  pattern?: string;
  title?: string;
  ariaLabel?: string;
  spellCheck?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  /** Sets `data-testid` on the native `<input>` for e2e (e.g. Playwright). */
  testId?: string;
}

export const Input = ({
  name,
  onChange,
  value: valueProp,
  defaultValue,
  placeholder,
  label,
  variant = "primary",
  type = "text",
  maxLength,
  required = false,
  pattern,
  title,
  ariaLabel,
  spellCheck,
  disabled = false,
  className = "",
  icon,
  testId,
}: InputProps) => {
  const isControlled = valueProp !== undefined;
  const [internalValue, setInternalValue] = useState(() => defaultValue ?? "");
  const [isFocused, setIsFocused] = useState(false);

  const value = isControlled ? valueProp : internalValue;

  const inputClassNames = ["rounded-sm font-sans z-10 w-full"];

  const spacings = "py-4 px-5";
  const outline = "outline-hidden";

  inputClassNames.push(spacings, outline);

  const inputWrapperClassNames = ["flex rounded-smb p-px w-full"];

  if (isFocused) {
    inputWrapperClassNames.push("bg-gradient");
  } else if (variant === "primary" || variant === "tertiary") {
    inputWrapperClassNames.push("bg-lightgray");
  }

  switch (variant) {
    case "primary":
      inputClassNames.push("text-primary bg-neutral");
      break;
    case "secondary":
      inputClassNames.push("text-neutral bg-neutral dark:bg-gray");
      break;
    case "tertiary":
      inputClassNames.push("text-neutral bg-neutral dark:bg-primary");
      break;
  }

  if (disabled) {
    inputClassNames.push("cursor-not-allowed opacity-50");
  }

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const next = event.target.value;
    if (!isControlled) {
      setInternalValue(next);
    }
    onChange?.(next);
  };

  return (
    <div className={className}>
      <label htmlFor={name}>
        <span className="sr-only">{label}</span>

        <div className={inputWrapperClassNames.join(" ")}>
          {icon && (
            <div className="flex items-center justify-center pl-4">
              {icon}
            </div>
          )}

          <input
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            className={inputClassNames.join(" ")}
            autoComplete="off"
            onChange={onInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            type={type}
            maxLength={maxLength}
            required={required}
            pattern={pattern}
            title={title}
            aria-label={ariaLabel || label || name}
            spellCheck={spellCheck}
            disabled={disabled}
            data-testid={testId}
          />
        </div>
      </label>
    </div>
  );
};

export default Input;
