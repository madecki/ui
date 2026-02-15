import { useState } from "react";
import { Button, type ButtonProps } from "./Button";

export interface RadioButtonsProps {
  items: Omit<ButtonProps, "size" | "onClick" | "isActive">[];
  onChange: (value: string) => void;
  size?: ButtonProps["size"];
  className?: string;
}

export const RadioButtons = ({
  items,
  onChange,
  size = "md",
  className = "",
}: RadioButtonsProps) => {
  const [selectedButton, setSelectedButton] = useState<string | undefined>();

  const onButtonClick = (id?: string) => {
    setSelectedButton(id);
    onChange(id ?? "");
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <Button
          {...item}
          size={size}
          key={item.id}
          isActive={selectedButton === item.id}
          onClick={onButtonClick}
        />
      ))}
    </div>
  );
};

export default RadioButtons;
