import { describe, it, expect, vi, afterEach } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioButtons } from "./RadioButtons";

afterEach(() => {
  cleanup();
});

const items = [
  { id: "a", variant: "primary" as const, label: "Alpha" },
  { id: "b", variant: "primary" as const, label: "Beta" },
];

describe("RadioButtons", () => {
  it("groups options under an accessible name and selects via click", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioButtons label="Pick one" items={items} onChange={onChange} />,
    );

    const group = screen.getByRole("radiogroup", { name: "Pick one" });
    expect(group).toBeInTheDocument();

    const beta = within(group).getByRole("radio", { name: "Beta" });
    await user.click(beta);
    expect(onChange).toHaveBeenCalledWith("b");
    expect(beta).toHaveAttribute("aria-checked", "true");
  });
});
