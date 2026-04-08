import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentType } from "react";
import { useState } from "react";
import { Select, type SelectOption } from "./Select";
import type { LabelVisibility } from "../FormFieldLabel";

/** Widened args so Storybook can type stories; runtime props still match `Select`. */
type SelectStoryArgs = {
  name: string;
  label: string;
  labelVisibility?: LabelVisibility;
  options: SelectOption[];
  placeholder?: string;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  className?: string;
  testId?: string;
  multi?: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
};

const sampleOptions: SelectOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
];

const meta = {
  title: "Components/Select",
  component: Select as ComponentType<SelectStoryArgs>,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80 pb-48">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<SelectStoryArgs>;

export default meta;
type Story = StoryObj<SelectStoryArgs>;

export const Default: Story = {
  args: {
    name: "select-default",
    label: "Choose fruit",
    options: sampleOptions,
    placeholder: "Search or select…",
  },
};

export const Primary: Story = {
  args: {
    name: "select-primary",
    label: "Primary",
    options: sampleOptions,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    name: "select-secondary",
    label: "Secondary",
    options: sampleOptions,
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    name: "select-tertiary",
    label: "Tertiary",
    options: sampleOptions,
    variant: "tertiary",
  },
};

export const Multi: Story = {
  args: {
    name: "select-multi",
    label: "Fruits (multi)",
    options: sampleOptions,
    multi: true,
    placeholder: "Add fruits…",
  },
};

export const Disabled: Story = {
  args: {
    name: "select-disabled",
    label: "Disabled",
    options: sampleOptions,
    disabled: true,
  },
};

export const LabelSrOnly: Story = {
  args: {
    name: "select-sr-label",
    label: "Hidden visually",
    labelVisibility: "sr-only",
    options: sampleOptions,
    placeholder: "Label is screen-reader only",
  },
};

function ControlledSingleStory() {
  const [value, setValue] = useState("cherry");
  return (
    <Select
      name="controlled-single"
      label="Controlled"
      options={sampleOptions}
      value={value}
      onChange={setValue}
    />
  );
}

export const ControlledSingle: Story = {
  args: {
    name: "controlled-single",
    label: "Controlled",
    options: sampleOptions,
  },
  render: () => <ControlledSingleStory />,
};

function ControlledMultiStory() {
  const [value, setValue] = useState<string[]>(["apple", "banana"]);
  return (
    <Select
      name="controlled-multi"
      label="Controlled multi"
      options={sampleOptions}
      multi
      value={value}
      onChange={setValue}
    />
  );
}

export const ControlledMulti: Story = {
  args: {
    name: "controlled-multi",
    label: "Controlled multi",
    options: sampleOptions,
    multi: true,
  },
  render: () => <ControlledMultiStory />,
};

export const AllVariants: Story = {
  args: {
    name: "all-variants",
    label: "Unused",
    options: sampleOptions,
  },
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Select
        name="sv-primary"
        label="Primary"
        options={sampleOptions}
        variant="primary"
      />
      <Select
        name="sv-secondary"
        label="Secondary"
        options={sampleOptions}
        variant="secondary"
      />
      <Select
        name="sv-tertiary"
        label="Tertiary"
        options={sampleOptions}
        variant="tertiary"
      />
    </div>
  ),
};
