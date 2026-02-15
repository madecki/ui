import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "success",
        "warning",
        "danger",
        "info",
        "blue",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    label: "Success Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    label: "Warning Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Danger Button",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    label: "Info Button",
  },
};

export const Blue: Story = {
  args: {
    variant: "blue",
    label: "Blue Button",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    label: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "md",
    label: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    label: "Large Button",
  },
};

export const Active: Story = {
  args: {
    variant: "primary",
    label: "Active Button",
    isActive: true,
    id: "active-btn",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    label: "Disabled Button",
    disabled: true,
  },
};

export const AllVariants: Story = {
  args: {
    variant: "primary",
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" label="Primary" />
      <Button variant="success" label="Success" />
      <Button variant="warning" label="Warning" />
      <Button variant="danger" label="Danger" />
      <Button variant="info" label="Info" />
      <Button variant="blue" label="Blue" />
    </div>
  ),
};
