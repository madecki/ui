import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    gap: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around"],
    },
    wrap: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray p-5 rounded-md text-white">{children}</div>
);

export const Vertical: Story = {
  args: {
    direction: "vertical",
    gap: "4",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    gap: "4",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const WithDifferentGaps: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className="flex gap-10">
      <div>
        <p className="text-lightgray text-sm mb-2">gap="2"</p>
        <Stack direction="vertical" gap="2">
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Stack>
      </div>
      <div>
        <p className="text-lightgray text-sm mb-2">gap="5"</p>
        <Stack direction="vertical" gap="5">
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Stack>
      </div>
      <div>
        <p className="text-lightgray text-sm mb-2">gap="10"</p>
        <Stack direction="vertical" gap="10">
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Stack>
      </div>
    </div>
  ),
};

export const AlignCenter: Story = {
  args: {
    direction: "horizontal",
    gap: "4",
    align: "center",
    children: (
      <>
        <div className="bg-gray p-3 rounded-md text-white">Short</div>
        <div className="bg-gray p-8 rounded-md text-white">Tall</div>
        <div className="bg-gray p-5 rounded-md text-white">Medium</div>
      </>
    ),
  },
};

export const JustifyBetween: Story = {
  args: {
    direction: "horizontal",
    gap: "4",
    justify: "between",
    className: "w-96",
    children: (
      <>
        <Box>Left</Box>
        <Box>Right</Box>
      </>
    ),
  },
};

export const Wrapped: Story = {
  args: {
    direction: "horizontal",
    gap: "3",
    wrap: true,
    className: "w-64",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
        <Box>Item 4</Box>
        <Box>Item 5</Box>
        <Box>Item 6</Box>
      </>
    ),
  },
};

export const NestedStacks: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Stack direction="vertical" gap="5">
      <p className="text-white">Header Section</p>
      <Stack direction="horizontal" gap="4">
        <Box>Nav 1</Box>
        <Box>Nav 2</Box>
        <Box>Nav 3</Box>
      </Stack>
      <Stack direction="vertical" gap="3">
        <Box>Content Row 1</Box>
        <Box>Content Row 2</Box>
      </Stack>
    </Stack>
  ),
};
