import type { Meta, StoryObj } from "@storybook/react";
import { BlockQuote } from "./BlockQuote";

const meta = {
  title: "Components/BlockQuote",
  component: BlockQuote,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BlockQuote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "This is a blockquote. It's great for highlighting important information or quotes.",
  },
};

export const LongContent: Story = {
  args: {
    children: (
      <>
        <p>
          "The only way to do great work is to love what you do. If you haven't
          found it yet, keep looking. Don't settle."
        </p>
        <p className="mt-4 text-sm opacity-75">— Steve Jobs</p>
      </>
    ),
  },
};

export const WithMultipleParagraphs: Story = {
  args: {
    children: (
      <>
        <p>First paragraph of the quote.</p>
        <p className="mt-2">Second paragraph with more details.</p>
        <p className="mt-2">Final thoughts and conclusion.</p>
      </>
    ),
  },
};
