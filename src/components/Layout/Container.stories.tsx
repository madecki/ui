import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
    },
    centered: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "lg",
    centered: true,
    children: (
      <div className="bg-gray p-5 rounded-md">
        <p className="text-white">
          Container with default size (lg) and centered content.
        </p>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: (
      <div className="bg-gray p-5 rounded-md">
        <p className="text-white">Small container (max-w-screen-sm)</p>
      </div>
    ),
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: (
      <div className="bg-gray p-5 rounded-md">
        <p className="text-white">Medium container (max-w-screen-md)</p>
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: (
      <div className="bg-gray p-5 rounded-md">
        <p className="text-white">Large container (max-w-screen-lg)</p>
      </div>
    ),
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: (
      <div className="bg-gray p-5 rounded-md">
        <p className="text-white">Extra large container (max-w-screen-xl)</p>
      </div>
    ),
  },
};

export const Full: Story = {
  args: {
    size: "full",
    children: (
      <div className="bg-gray p-5 rounded-md">
        <p className="text-white">Full width container</p>
      </div>
    ),
  },
};

export const NotCentered: Story = {
  args: {
    size: "md",
    centered: false,
    children: (
      <div className="bg-gray p-5 rounded-md">
        <p className="text-white">Container aligned to the left (not centered)</p>
      </div>
    ),
  },
};

export const AllSizes: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className="flex flex-col gap-5 bg-primary p-5">
      <Container size="sm">
        <div className="bg-success p-3 rounded-md">
          <p className="text-white text-sm">sm - max-w-screen-sm</p>
        </div>
      </Container>
      <Container size="md">
        <div className="bg-info p-3 rounded-md">
          <p className="text-white text-sm">md - max-w-screen-md</p>
        </div>
      </Container>
      <Container size="lg">
        <div className="bg-warning p-3 rounded-md">
          <p className="text-white text-sm">lg - max-w-screen-lg</p>
        </div>
      </Container>
      <Container size="xl">
        <div className="bg-danger p-3 rounded-md">
          <p className="text-white text-sm">xl - max-w-screen-xl</p>
        </div>
      </Container>
      <Container size="full">
        <div className="bg-blue p-3 rounded-md">
          <p className="text-white text-sm">full - max-w-full</p>
        </div>
      </Container>
    </div>
  ),
};
