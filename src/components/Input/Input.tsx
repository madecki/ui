import { ChangeEventHandler, useState, ReactNode } from "react";

export interface InputProps {
  name: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  type?: "text" | "number" | "email" | "search" | "password" | "tel" | "url";
  required?: boolean;
  pattern?: string;
  title?: string;
  ariaLabel?: string;
  spellCheck?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

export const Input = ({
  name,
  onChange,
  defaultValue,
  placeholder,
  label,
  variant = "primary",
  type = "text",
  required = false,
  pattern,
  title,
  ariaLabel,
  spellCheck,
  disabled = false,
  className = "",
  icon,
}: InputProps) => {
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  const inputClassNames = ["rounded-sm font-sans z-10 w-full"];

  const textColor = "text-primary";
  const spacings = "py-4 px-5";
  const outline = "outline-none";

  inputClassNames.push(textColor, spacings, outline);

  const inputWrapperClassNames = ["flex rounded-smb p-px w-full"];

  if (isFocused) inputWrapperClassNames.push("bg-gradient");

  switch (variant) {
    case "primary":
      inputClassNames.push("bg-neutral");
      inputWrapperClassNames.push("bg-lightgray");
      break;
    case "secondary":
      inputClassNames.push("bg-neutral dark:bg-gray");
      break;
    case "tertiary":
      inputClassNames.push("bg-neutral dark:bg-primary");
      inputWrapperClassNames.push("bg-lightgray");
      break;
  }

  if (disabled) {
    inputClassNames.push("cursor-not-allowed opacity-50");
  }

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
    onChange?.(event.target.value);
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
            value={value || ""}
            className={inputClassNames.join(" ")}
            autoComplete="off"
            onChange={onInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            type={type}
            required={required}
            pattern={pattern}
            title={title}
            aria-label={ariaLabel || label || name}
            spellCheck={spellCheck}
            disabled={disabled}
          />
        </div>
      </label>
    </div>
  );
};

export default Input;
