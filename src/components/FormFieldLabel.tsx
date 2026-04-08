import { Text } from "./Typography/Text";

export type LabelVisibility = "visible" | "sr-only";

export function FormFieldLabel({
  label,
  labelVisibility,
  id,
}: {
  label: string;
  labelVisibility: LabelVisibility;
  id: string;
}) {
  return (
    <Text
      as="span"
      id={id}
      size="sm"
      weight="medium"
      color="muted"
      className={labelVisibility === "sr-only" ? "sr-only" : "mb-2 block"}
    >
      {label}
    </Text>
  );
}
