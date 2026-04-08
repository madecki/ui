import { describe, it, expect, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Textarea } from "./Textarea";

afterEach(() => {
  cleanup();
});

describe("Textarea", () => {
  it("is uncontrolled with defaultValue", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Textarea
        name="notes"
        label="Notes"
        defaultValue="hello"
        onChange={onChange}
      />,
    );

    const el = screen.getByRole("textbox", { name: "Notes" });
    expect(el).toHaveValue("hello");
    await user.clear(el);
    await user.type(el, "hi");
    expect(onChange).toHaveBeenCalled();
    expect(el).toHaveValue("hi");
  });

  it("is controlled when value is passed", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <Textarea name="notes" label="Notes" value="a" onChange={onChange} />,
    );

    const el = screen.getByRole("textbox", { name: "Notes" });
    expect(el).toHaveValue("a");

    rerender(
      <Textarea name="notes" label="Notes" value="b" onChange={onChange} />,
    );
    expect(el).toHaveValue("b");
  });

  it("forwards rows and maxLength", async () => {
    const user = userEvent.setup();
    render(
      <Textarea name="notes" label="Notes" rows={6} maxLength={5} />,
    );
    const el = screen.getByRole("textbox", { name: "Notes" });
    expect(el).toHaveAttribute("rows", "6");
    await user.type(el, "abcdef");
    expect(el).toHaveValue("abcde");
  });

  it("exposes testId on the native textarea when provided", () => {
    render(<Textarea name="notes" label="Notes" testId="story-notes" />);
    expect(screen.getByTestId("story-notes")).toBe(
      screen.getByRole("textbox", { name: "Notes" }),
    );
  });

  it("when controlled, typing updates via parent state", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    function Wrapper() {
      const [v, setV] = useState("");
      return (
        <Textarea
          name="notes"
          label="Notes"
          value={v}
          onChange={(next) => {
            onChange(next);
            setV(next);
          }}
        />
      );
    }

    render(<Wrapper />);
    const el = screen.getByRole("textbox", { name: "Notes" });
    await user.type(el, "ok");
    expect(onChange).toHaveBeenCalled();
    expect(el).toHaveValue("ok");
  });
});
