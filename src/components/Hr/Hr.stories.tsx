import type { Meta, StoryObj } from "@storybook/react";
import { Hr } from "./Hr";

const meta = {
  title: "Components/Hr",
  component: Hr,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <p className="text-white">Content above the line</p>
      <Hr />
      <p className="text-white">Content below the line</p>
    </div>
  ),
};

export const WithCustomClass: Story = {
  render: () => (
    <div className="w-96">
      <p className="text-white">Content above</p>
      <Hr className="border-warning my-8" />
      <p className="text-white">Content below</p>
    </div>
  ),
};

export const MultipleHrs: Story = {
  render: () => (
    <div className="w-96">
      <p className="text-white">Section 1</p>
      <Hr />
      <p className="text-white">Section 2</p>
      <Hr />
      <p className="text-white">Section 3</p>
      <Hr />
      <p className="text-white">Section 4</p>
    </div>
  ),
};
