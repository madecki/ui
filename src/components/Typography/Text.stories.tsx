import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "div", "label"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
    color: {
      control: "select",
      options: ["default", "muted", "primary", "success", "warning", "danger"],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is default body text using the Text component.",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
    children: "Extra small text (12px) - great for captions and labels.",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small text (14px) - good for secondary information.",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium text (16px) - default body text size.",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large text (18px) - for emphasized body text.",
  },
};

export const Muted: Story = {
  args: {
    color: "muted",
    children: "Muted text for secondary information.",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    children: "Success message text.",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    children: "Warning message text.",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    children: "Error or danger message text.",
  },
};

export const Bold: Story = {
  args: {
    weight: "bold",
    children: "Bold text for emphasis.",
  },
};

export const AsSpan: Story = {
  args: {
    as: "span",
    children: "This is rendered as a span element.",
  },
};

export const AsLabel: Story = {
  args: {
    as: "label",
    weight: "medium",
    children: "Form Label",
  },
};

export const AllSizes: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Text size="xs">Extra Small (xs) - 12px</Text>
      <Text size="sm">Small (sm) - 14px</Text>
      <Text size="md">Medium (md) - 16px</Text>
      <Text size="lg">Large (lg) - 18px</Text>
    </div>
  ),
};

export const AllColors: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <Text color="default">Default color</Text>
      <Text color="muted">Muted color</Text>
      <Text color="success">Success color</Text>
      <Text color="warning">Warning color</Text>
      <Text color="danger">Danger color</Text>
    </div>
  ),
};

export const AllWeights: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <Text weight="normal">Normal weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  ),
};

export const Paragraph: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div className="max-w-lg">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </div>
  ),
};

export const MixedInline: Story = {
  args: {
    children: "",
  },
  render: () => (
    <Text>
      This is regular text with{" "}
      <Text as="span" weight="bold">
        bold text
      </Text>{" "}
      and{" "}
      <Text as="span" color="success">
        colored text
      </Text>{" "}
      inline.
    </Text>
  ),
};
