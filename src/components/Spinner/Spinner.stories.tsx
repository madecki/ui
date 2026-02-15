import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
import { SpinnerOverlay } from "./SpinnerOverlay";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Spinner size="sm" />
        <p className="text-white mt-2 text-sm">Small</p>
      </div>
      <div className="text-center">
        <Spinner size="md" />
        <p className="text-white mt-2 text-sm">Medium</p>
      </div>
      <div className="text-center">
        <Spinner size="lg" />
        <p className="text-white mt-2 text-sm">Large</p>
      </div>
    </div>
  ),
};

// SpinnerOverlay story
const overlayMeta = {
  title: "Components/SpinnerOverlay",
  component: SpinnerOverlay,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SpinnerOverlay>;

export const Overlay: StoryObj<typeof SpinnerOverlay> = {
  render: () => (
    <div className="relative h-96 bg-gray">
      <p className="text-white p-4">Content behind the overlay</p>
      <SpinnerOverlay isVisible={true} />
    </div>
  ),
};
