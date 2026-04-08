import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Toast } from "./Toast";

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "danger"],
    },
    placement: {
      control: "select",
      options: [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
      ],
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: "info",
    placement: "bottom-right",
    autoCloseMs: 0,
    children: <p className="text-white">Saved to your account.</p>,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    placement: "bottom-right",
    autoCloseMs: 0,
    children: <p className="text-white">Profile updated successfully.</p>,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    placement: "bottom-right",
    autoCloseMs: 0,
    children: <p className="text-white">Could not complete the request.</p>,
  },
};

export const TopLeft: Story = {
  args: {
    variant: "info",
    placement: "top-left",
    autoCloseMs: 0,
    children: <p className="text-white">Top-left placement.</p>,
  },
};

export const TopRight: Story = {
  args: {
    variant: "success",
    placement: "top-right",
    autoCloseMs: 0,
    children: <p className="text-white">Top-right placement.</p>,
  },
};

export const BottomLeft: Story = {
  args: {
    variant: "info",
    placement: "bottom-left",
    autoCloseMs: 0,
    children: <p className="text-white">Bottom-left placement.</p>,
  },
};

function ShowAgainStory() {
  const [toastId, setToastId] = useState(0);
  return (
    <div className="min-h-screen bg-primary p-10">
      <Button
        variant="info"
        label="Show toast"
        id="show-toast"
        onClick={() => setToastId((n) => n + 1)}
      />
      {toastId > 0 ? (
        <Toast
          key={toastId}
          variant="success"
          autoCloseMs={4000}
          onClose={() => setToastId(0)}
          placement="bottom-right"
        >
          <p className="text-white">Closes in 4s or use the close control.</p>
        </Toast>
      ) : null}
    </div>
  );
}

export const ShowAgain: Story = {
  args: {
    children: <span className="sr-only">Demo</span>,
  },
  render: () => <ShowAgainStory />,
};
