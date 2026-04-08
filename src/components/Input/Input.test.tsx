import { describe, it, expect, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Input } from "./Input";

afterEach(() => {
  cleanup();
});

describe("Input", () => {
  it("is uncontrolled with defaultValue and does not require value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Input
        name="x"
        label="Field"
        defaultValue="hi"
        onChange={onChange}
      />,
    );

    const el = screen.getByRole("textbox", { name: "Field" });
    expect(el).toHaveValue("hi");
    await user.clear(el);
    await user.type(el, "yo");
    expect(onChange).toHaveBeenCalled();
    expect(el).toHaveValue("yo");
  });

  it("is controlled when value is passed and follows parent state", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <Input name="x" label="Field" value="a" onChange={onChange} />,
    );

    const el = screen.getByRole("textbox", { name: "Field" });
    expect(el).toHaveValue("a");

    rerender(
      <Input name="x" label="Field" value="b" onChange={onChange} />,
    );
    expect(el).toHaveValue("b");
  });

  it("when controlled, typing calls onChange and synced parent updates the field", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    function Wrapper() {
      const [v, setV] = useState("a");
      return (
        <Input
          name="x"
          label="Field"
          value={v}
          onChange={(next) => {
            onChange(next);
            setV(next);
          }}
        />
      );
    }

    render(<Wrapper />);
    const el = screen.getByRole("textbox", { name: "Field" });
    await user.clear(el);
    await user.type(el, "hi");
    expect(onChange).toHaveBeenCalled();
    expect(el).toHaveValue("hi");
  });

  it("treats empty string as controlled", () => {
    render(
      <Input name="x" label="Field" value="" onChange={vi.fn()} />,
    );
    expect(screen.getByRole("textbox", { name: "Field" })).toHaveValue("");
  });

  it("forwards maxLength to the native input", async () => {
    const user = userEvent.setup();
    render(
      <Input name="x" label="Field" maxLength={3} />,
    );
    const el = screen.getByRole("textbox", { name: "Field" });
    await user.type(el, "abcdef");
    expect(el).toHaveValue("abc");
  });

  it("accepts type date without a cast", () => {
    render(
      <Input
        name="d"
        label="Date"
        type="date"
        value="2026-03-30"
        onChange={vi.fn()}
      />,
    );
    expect(screen.getByLabelText("Date")).toHaveAttribute("type", "date");
  });

  it("exposes testId on the native input when provided", () => {
    render(
      <Input name="x" label="Field" testId="field-x" />,
    );
    expect(screen.getByTestId("field-x")).toBe(
      screen.getByRole("textbox", { name: "Field" }),
    );
  });
});
