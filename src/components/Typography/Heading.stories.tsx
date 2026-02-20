import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta = {
  title: "Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
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
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 1,
    children: "Heading Level 1",
  },
};

export const H1: Story = {
  args: {
    level: 1,
    children: "Heading Level 1",
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: "Heading Level 2",
  },
};

export const H3: Story = {
  args: {
    level: 3,
    children: "Heading Level 3",
  },
};

export const H4: Story = {
  args: {
    level: 4,
    children: "Heading Level 4",
  },
};

export const H5: Story = {
  args: {
    level: 5,
    children: "Heading Level 5",
  },
};

export const H6: Story = {
  args: {
    level: 6,
    children: "Heading Level 6",
  },
};

export const CustomSize: Story = {
  args: {
    level: 2,
    size: "4xl",
    children: "H2 with 4xl size",
  },
};

export const Muted: Story = {
  args: {
    level: 2,
    color: "muted",
    children: "Muted Heading",
  },
};

export const Success: Story = {
  args: {
    level: 2,
    color: "success",
    children: "Success Heading",
  },
};

export const Warning: Story = {
  args: {
    level: 2,
    color: "warning",
    children: "Warning Heading",
  },
};

export const Danger: Story = {
  args: {
    level: 2,
    color: "danger",
    children: "Danger Heading",
  },
};

export const LightWeight: Story = {
  args: {
    level: 1,
    weight: "normal",
    children: "Light Weight Heading",
  },
};

export const AllLevels: Story = {
  args: {
    level: 1,
    children: "",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading level={1}>Heading Level 1 (h1)</Heading>
      <Heading level={2}>Heading Level 2 (h2)</Heading>
      <Heading level={3}>Heading Level 3 (h3)</Heading>
      <Heading level={4}>Heading Level 4 (h4)</Heading>
      <Heading level={5}>Heading Level 5 (h5)</Heading>
      <Heading level={6}>Heading Level 6 (h6)</Heading>
    </div>
  ),
};

export const AllColors: Story = {
  args: {
    level: 2,
    children: "",
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Heading level={3} color="default">Default Color</Heading>
      <Heading level={3} color="muted">Muted Color</Heading>
      <Heading level={3} color="success">Success Color</Heading>
      <Heading level={3} color="warning">Warning Color</Heading>
      <Heading level={3} color="danger">Danger Color</Heading>
    </div>
  ),
};

export const AllWeights: Story = {
  args: {
    level: 2,
    children: "",
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Heading level={3} weight="normal">Normal Weight</Heading>
      <Heading level={3} weight="medium">Medium Weight</Heading>
      <Heading level={3} weight="semibold">Semibold Weight</Heading>
      <Heading level={3} weight="bold">Bold Weight</Heading>
    </div>
  ),
};
