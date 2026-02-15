import type { Meta, StoryObj } from "@storybook/react";
import { ContentBox } from "./ContentBox";
import { Info, Warning } from "../../icons";

const meta = {
  title: "Components/ContentBox",
  component: ContentBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "warning", "success", "danger"],
    },
  },
} satisfies Meta<typeof ContentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoBox: Story = {
  args: {
    variant: "info",
    icon: <Info />,
    children: (
      <p className="text-white">
        This is an informational box. Use it to highlight helpful tips or
        additional context.
      </p>
    ),
  },
};

export const WarningBox: Story = {
  args: {
    variant: "warning",
    icon: <Warning />,
    children: (
      <p className="text-white">
        Warning! Please pay attention to this important notice.
      </p>
    ),
  },
};

export const SuccessBox: Story = {
  args: {
    variant: "success",
    children: (
      <p className="text-white">
        Success! Your operation was completed successfully.
      </p>
    ),
  },
};

export const DangerBox: Story = {
  args: {
    variant: "danger",
    children: (
      <p className="text-white">
        Danger! This action cannot be undone. Please proceed with caution.
      </p>
    ),
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: "info",
    children: (
      <p className="text-white">
        A content box without an icon. Sometimes you don't need one.
      </p>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-96">
      <ContentBox variant="info" icon={<Info />}>
        <p className="text-white">Info variant</p>
      </ContentBox>
      <ContentBox variant="warning" icon={<Warning />}>
        <p className="text-white">Warning variant</p>
      </ContentBox>
      <ContentBox variant="success">
        <p className="text-white">Success variant</p>
      </ContentBox>
      <ContentBox variant="danger">
        <p className="text-white">Danger variant</p>
      </ContentBox>
    </div>
  ),
};
