import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
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
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    label: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    label: "Warning",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Danger",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    label: "Info",
  },
};

export const Blue: Story = {
  args: {
    variant: "blue",
    label: "Blue",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    label: "Small",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "md",
    label: "Medium",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    label: "Large",
  },
};

export const Filled: Story = {
  args: {
    variant: "primary",
    label: "Filled",
    filled: true,
  },
};

export const Muted: Story = {
  args: {
    variant: "primary",
    label: "Muted",
    muted: true,
  },
};

export const AllVariants: Story = {
  args: {
    variant: "primary",
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tag variant="primary" label="Primary" />
      <Tag variant="success" label="Success" />
      <Tag variant="warning" label="Warning" />
      <Tag variant="danger" label="Danger" />
      <Tag variant="info" label="Info" />
      <Tag variant="blue" label="Blue" />
    </div>
  ),
};
