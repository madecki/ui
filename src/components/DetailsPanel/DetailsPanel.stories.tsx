import type { Meta, StoryObj } from "@storybook/react";
import { DetailsPanel } from "./DetailsPanel";
import { Info, Warning } from "../../icons";
import { Text } from "../Typography/Text";

const meta = {
  title: "Components/DetailsPanel",
  component: DetailsPanel,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "warning", "success", "danger"],
    },
  },
  decorators: [
    (Story) => (
      <div className="dark w-[min(100%,28rem)] bg-primary p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DetailsPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoPanel: Story = {
  args: {
    variant: "info",
    summary: "Additional information",
    children: (
      <Text color="muted" size="sm">
        This body stays in the document for semantics and SEO; it is shown when
        the panel is expanded.
      </Text>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    variant: "warning",
    icon: <Warning />,
    summary: "Read before continuing",
    children: (
      <Text color="muted" size="sm">
        Details use native <code className="text-white">&lt;details&gt;</code>{" "}
        and <code className="text-white">&lt;summary&gt;</code> for accessible
        disclosure.
      </Text>
    ),
  },
};

export const DefaultOpen: Story = {
  args: {
    variant: "success",
    defaultOpen: true,
    icon: <Info />,
    summary: "Expanded by default",
    children: <Text color="muted">Use defaultOpen for the initial state.</Text>,
  },
};

export const AllVariants: Story = {
  args: {
    summary: "",
    children: null,
  },
  render: () => (
    <div className="flex flex-col gap-8">
      <DetailsPanel variant="info" summary="Info variant">
        <Text size="sm">Body content.</Text>
      </DetailsPanel>
      <DetailsPanel variant="warning" summary="Warning variant">
        <Text size="sm">Body content.</Text>
      </DetailsPanel>
      <DetailsPanel variant="success" summary="Success variant">
        <Text size="sm">Body content.</Text>
      </DetailsPanel>
      <DetailsPanel variant="danger" summary="Danger variant">
        <Text size="sm">Body content.</Text>
      </DetailsPanel>
    </div>
  ),
};
