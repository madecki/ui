import { describe, it, expect, vi, afterEach } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

afterEach(() => {
  cleanup();
});

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

describe("Select", () => {
  it("exposes combobox with data-testid and opens listbox with option test ids", async () => {
    const user = userEvent.setup();
    render(<Select name="fruit" label="Fruit" options={options} testId="pick-fruit" />);

    const combo = screen.getByRole("combobox", { name: "Fruit" });
    expect(combo).toHaveAttribute("data-testid", "pick-fruit");
    expect(combo).toHaveAttribute("aria-expanded", "false");

    await user.click(combo);

    expect(combo).toHaveAttribute("aria-expanded", "true");
    const list = screen.getByTestId("pick-fruit-listbox");
    expect(list).toHaveAttribute("role", "listbox");
    expect(screen.getByTestId("pick-fruit-option-apple")).toHaveAttribute(
      "data-option-value",
      "apple",
    );
    expect(screen.getByTestId("pick-fruit-option-banana")).toBeInTheDocument();
  });

  it("filters options when typing", async () => {
    const user = userEvent.setup();
    render(<Select name="fruit" label="Fruit" options={options} />);

    await user.click(screen.getByRole("combobox", { name: "Fruit" }));
    await user.keyboard("ban");

    expect(screen.getByTestId("select-fruit-listbox")).toBeInTheDocument();
    expect(screen.queryByTestId("select-fruit-option-apple")).not.toBeInTheDocument();
    expect(screen.getByTestId("select-fruit-option-banana")).toBeInTheDocument();
    expect(screen.queryByTestId("select-fruit-option-cherry")).not.toBeInTheDocument();
  });

  it("selects one value, calls onChange, and closes in single mode", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select name="fruit" label="Fruit" options={options} onChange={onChange} />,
    );

    await user.click(screen.getByRole("combobox", { name: "Fruit" }));
    await user.click(screen.getByTestId("select-fruit-option-cherry"));

    expect(onChange).toHaveBeenCalledWith("cherry");
    expect(screen.queryByTestId("select-fruit-listbox")).not.toBeInTheDocument();

    const combo = screen.getByRole("combobox", { name: "Fruit" });
    expect(combo).toHaveValue("Cherry");
  });

  it("supports controlled single value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(
      <Select
        name="fruit"
        label="Fruit"
        options={options}
        value="apple"
        onChange={onChange}
      />,
    );

    expect(screen.getByRole("combobox", { name: "Fruit" })).toHaveValue("Apple");

    await user.click(screen.getByRole("combobox", { name: "Fruit" }));
    await user.click(screen.getByTestId("select-fruit-option-banana"));
    expect(onChange).toHaveBeenCalledWith("banana");

    rerender(
      <Select
        name="fruit"
        label="Fruit"
        options={options}
        value="banana"
        onChange={onChange}
      />,
    );
    expect(screen.getByRole("combobox", { name: "Fruit" })).toHaveValue("Banana");
  });

  it("toggles multiple selections when multi is true and keeps list open", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select
        name="fruit"
        label="Fruit"
        options={options}
        multi
        onChange={onChange}
      />,
    );

    await user.click(screen.getByRole("combobox", { name: "Fruit" }));
    const listbox = screen.getByTestId("select-fruit-listbox");
    expect(listbox).toHaveAttribute("aria-multiselectable", "true");

    await user.click(within(listbox).getByTestId("select-fruit-option-apple"));
    expect(onChange).toHaveBeenLastCalledWith(["apple"]);
    expect(screen.getByTestId("select-fruit-listbox")).toBeInTheDocument();

    await user.click(within(listbox).getByTestId("select-fruit-option-banana"));
    expect(onChange).toHaveBeenLastCalledWith(["apple", "banana"]);

    await user.click(within(listbox).getByTestId("select-fruit-option-apple"));
    expect(onChange).toHaveBeenLastCalledWith(["banana"]);
  });

  it("selects highlighted option with Enter", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select name="fruit" label="Fruit" options={options} onChange={onChange} />,
    );

    await user.click(screen.getByRole("combobox", { name: "Fruit" }));
    await user.keyboard("{ArrowDown}{Enter}");
    expect(onChange).toHaveBeenCalledWith("banana");
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(<Select name="fruit" label="Fruit" options={options} />);

    await user.click(screen.getByRole("combobox", { name: "Fruit" }));
    expect(screen.getByTestId("select-fruit-listbox")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByTestId("select-fruit-listbox")).not.toBeInTheDocument();
  });

  it("renders listbox with position out of flow (absolute)", async () => {
    const user = userEvent.setup();
    render(<Select name="fruit" label="Fruit" options={options} />);
    await user.click(screen.getByRole("combobox", { name: "Fruit" }));
    const list = screen.getByTestId("select-fruit-listbox");
    expect(list.className).toMatch(/absolute/);
  });
});
