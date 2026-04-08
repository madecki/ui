import { describe, it, expect, vi, afterEach } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toast } from "./Toast";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("Toast", () => {
  it("calls onClose when the close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Toast onClose={onClose}>
        <span>Message</span>
      </Toast>,
    );

    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("uses role alert for danger variant", () => {
    render(
      <Toast variant="danger" autoCloseMs={0}>
        <span>Error</span>
      </Toast>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Error");
  });

  it("auto-closes after autoCloseMs and invokes onClose", () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(
      <Toast autoCloseMs={1500} onClose={onClose}>
        <span>Timed</span>
      </Toast>,
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("does not auto-close when autoCloseMs is 0", () => {
    vi.useFakeTimers();
    render(
      <Toast autoCloseMs={0}>
        <span>Stay</span>
      </Toast>,
    );

    act(() => {
      vi.advanceTimersByTime(60_000);
    });
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
