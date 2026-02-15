import type { Meta, StoryObj } from "@storybook/react";
import { ButtonTransparent } from "./ButtonTransparent";

const meta = {
  title: "Components/ButtonTransparent",
  component: ButtonTransparent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "warning", "danger", "info", "blue"],
    },
  },
} satisfies Meta<typeof ButtonTransparent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};

export const Blue: Story = {
  args: {
    variant: "blue",
    children: "Blue",
  },
};

export const Disabled: Story = {
  args: {
    variant: "success",
    children: "Disabled",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonTransparent variant="success">Success</ButtonTransparent>
      <ButtonTransparent variant="warning">Warning</ButtonTransparent>
      <ButtonTransparent variant="danger">Danger</ButtonTransparent>
      <ButtonTransparent variant="info">Info</ButtonTransparent>
      <ButtonTransparent variant="blue">Blue</ButtonTransparent>
    </div>
  ),
};
