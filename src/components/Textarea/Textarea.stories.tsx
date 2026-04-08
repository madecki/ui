import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "default-textarea",
    label: "Message",
    placeholder: "Type something…",
    rows: 4,
  },
};

export const Primary: Story = {
  args: {
    name: "primary-textarea",
    label: "Primary",
    placeholder: "Primary variant",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    name: "secondary-textarea",
    label: "Secondary",
    placeholder: "Secondary variant",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    name: "tertiary-textarea",
    label: "Tertiary",
    placeholder: "Tertiary variant",
    variant: "tertiary",
  },
};

export const Disabled: Story = {
  args: {
    name: "disabled-textarea",
    label: "Disabled",
    placeholder: "Cannot edit",
    disabled: true,
  },
};

function ControlledTextareaStory() {
  const [value, setValue] = useState("Controlled text");
  return (
    <Textarea
      name="controlled-textarea"
      label="Controlled"
      value={value}
      onChange={setValue}
      testId="story-controlled-textarea"
    />
  );
}

export const Controlled: Story = {
  render: () => <ControlledTextareaStory />,
};

export const LabelSrOnly: Story = {
  args: {
    name: "sr-textarea",
    label: "Hidden visually",
    labelVisibility: "sr-only",
    placeholder: "Label is screen-reader only",
  },
};
