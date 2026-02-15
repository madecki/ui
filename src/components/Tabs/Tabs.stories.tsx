import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { label: "Tab 1", value: "tab1" },
      { label: "Tab 2", value: "tab2" },
      { label: "Tab 3", value: "tab3" },
    ],
    onTabClick: (value) => console.log("Selected tab:", value),
  },
};

export const WithActiveTab: Story = {
  args: {
    tabs: [
      { label: "Home", value: "home" },
      { label: "Profile", value: "profile", isActive: true },
      { label: "Settings", value: "settings" },
    ],
    onTabClick: (value) => console.log("Selected tab:", value),
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { label: "Overview", value: "overview" },
      { label: "Analytics", value: "analytics" },
      { label: "Reports", value: "reports" },
      { label: "Notifications", value: "notifications" },
      { label: "Settings", value: "settings" },
    ],
    onTabClick: (value) => console.log("Selected tab:", value),
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: [
      { label: "Active", value: "active" },
      { label: "Archived", value: "archived" },
    ],
    onTabClick: (value) => console.log("Selected tab:", value),
  },
};
