import type { Meta, StoryObj } from "@storybook/react";
import { RadioButtons } from "./RadioButtons";

const meta = {
  title: "Components/RadioButtons",
  component: RadioButtons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof RadioButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: "option1", variant: "primary", label: "Option 1" },
      { id: "option2", variant: "primary", label: "Option 2" },
      { id: "option3", variant: "primary", label: "Option 3" },
    ],
    onChange: (value) => console.log("Selected:", value),
  },
};

export const ColorVariants: Story = {
  args: {
    items: [
      { id: "success", variant: "success", label: "Success" },
      { id: "warning", variant: "warning", label: "Warning" },
      { id: "danger", variant: "danger", label: "Danger" },
      { id: "info", variant: "info", label: "Info" },
    ],
    onChange: (value) => console.log("Selected:", value),
  },
};

export const Small: Story = {
  args: {
    items: [
      { id: "opt1", variant: "primary", label: "One" },
      { id: "opt2", variant: "primary", label: "Two" },
      { id: "opt3", variant: "primary", label: "Three" },
    ],
    size: "sm",
    onChange: (value) => console.log("Selected:", value),
  },
};
