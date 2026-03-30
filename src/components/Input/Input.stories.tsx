import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input } from "./Input";
import { Search } from "../../icons";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "search",
        "tel",
        "url",
        "date",
        "time",
        "datetime-local",
      ],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "default-input",
    label: "Default Input",
    placeholder: "Enter text...",
  },
};

export const Primary: Story = {
  args: {
    name: "primary-input",
    label: "Primary Input",
    placeholder: "Primary variant",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    name: "secondary-input",
    label: "Secondary Input",
    placeholder: "Secondary variant",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    name: "tertiary-input",
    label: "Tertiary Input",
    placeholder: "Tertiary variant",
    variant: "tertiary",
  },
};

export const WithSearchIcon: Story = {
  args: {
    name: "search-input",
    label: "Search",
    placeholder: "Search...",
    icon: <Search size={20} className="text-lightgray" />,
  },
};

export const Email: Story = {
  args: {
    name: "email-input",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    required: true,
  },
};

export const Password: Story = {
  args: {
    name: "password-input",
    label: "Password",
    placeholder: "Enter password",
    type: "password",
  },
};

export const Disabled: Story = {
  args: {
    name: "disabled-input",
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    name: "prefilled-input",
    label: "Prefilled Input",
    defaultValue: "Hello World",
  },
};

function ControlledInputStory() {
  const [value, setValue] = useState("Controlled text");
  return (
    <Input
      name="controlled-input"
      label="Controlled"
      value={value}
      onChange={setValue}
      testId="story-controlled-input"
    />
  );
}

export const Controlled: Story = {
  args: {
    name: "controlled-input",
    label: "Controlled",
  },
  render: () => <ControlledInputStory />,
};

export const WithMaxLength: Story = {
  args: {
    name: "maxlen-input",
    label: "Max 20 characters",
    placeholder: "Up to 20 chars",
    maxLength: 20,
    testId: "story-maxlen-input",
  },
};

export const WithTestId: Story = {
  args: {
    name: "e2e-input",
    label: "E2E hook",
    placeholder: "data-testid on input",
    testId: "login-email",
  },
};

export const DateType: Story = {
  args: {
    name: "date-input",
    label: "Date",
    type: "date",
    testId: "story-date-input",
  },
};

export const AllVariants: Story = {
  args: {
    name: "primary",
    label: "Primary",
    placeholder: "Primary variant",
    variant: "primary",
  },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input
        name="primary"
        label="Primary"
        placeholder="Primary variant"
        variant="primary"
      />
      <Input
        name="secondary"
        label="Secondary"
        placeholder="Secondary variant"
        variant="secondary"
      />
      <Input
        name="tertiary"
        label="Tertiary"
        placeholder="Tertiary variant"
        variant="tertiary"
      />
    </div>
  ),
};
