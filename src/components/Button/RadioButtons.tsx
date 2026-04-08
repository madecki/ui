import { useId, useState } from "react";
import { FormFieldLabel, type LabelVisibility } from "../FormFieldLabel";
import { Button, type ButtonProps } from "./Button";

export interface RadioButtonsProps {
  label: string;
  /** Default `visible`. Use `sr-only` to hide the group label visually while keeping it for assistive tech. */
  labelVisibility?: LabelVisibility;
  items: Omit<ButtonProps, "size" | "onClick" | "isActive" | "role" | "ariaChecked">[];
  onChange: (value: string) => void;
  size?: ButtonProps["size"];
  className?: string;
}

export const RadioButtons = ({
  label,
  labelVisibility = "visible",
  items,
  onChange,
  size = "md",
  className = "",
}: RadioButtonsProps) => {
  const labelId = useId();
  const [selectedButton, setSelectedButton] = useState<string | undefined>();

  const onButtonClick = (id?: string) => {
    setSelectedButton(id);
    onChange(id ?? "");
  };

  return (
    <div className={className}>
      <FormFieldLabel
        id={labelId}
        label={label}
        labelVisibility={labelVisibility}
      />
      <div
        role="radiogroup"
        aria-labelledby={labelId}
        className="flex flex-wrap gap-2"
      >
        {items.map((item) => (
          <Button
            {...item}
            size={size}
            key={item.id}
            role="radio"
            ariaChecked={selectedButton === item.id}
            isActive={selectedButton === item.id}
            onClick={onButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
