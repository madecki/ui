import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DetailsPanel } from "./DetailsPanel";

afterEach(() => {
  cleanup();
});

describe("DetailsPanel", () => {
  it("renders summary and uses native details element", () => {
    render(
      <DetailsPanel summary="Section title">
        <p>Hidden body</p>
      </DetailsPanel>,
    );

    expect(screen.getByText("Section title")).toBeInTheDocument();
    const details = document.querySelector("details");
    expect(details).not.toBeNull();
    expect(details?.querySelector("summary")).not.toBeNull();
    expect(screen.getByText("Hidden body")).toBeInTheDocument();
  });

  it("starts closed when defaultOpen is omitted", () => {
    render(
      <DetailsPanel summary="A">
        <p>B</p>
      </DetailsPanel>,
    );
    expect(document.querySelector("details")?.hasAttribute("open")).toBe(
      false,
    );
  });

  it("starts open when defaultOpen is true", () => {
    render(
      <DetailsPanel summary="A" defaultOpen>
        <p>B</p>
      </DetailsPanel>,
    );
    expect(document.querySelector("details")?.hasAttribute("open")).toBe(true);
  });

  it("toggles open state when summary is activated", async () => {
    const user = userEvent.setup();
    render(
      <DetailsPanel summary="Click me">
        <p>Revealed</p>
      </DetailsPanel>,
    );

    const details = document.querySelector("details") as HTMLDetailsElement;
    expect(details.open).toBe(false);

    await user.click(screen.getByText("Click me"));
    expect(details.open).toBe(true);

    await user.click(screen.getByText("Click me"));
    expect(details.open).toBe(false);
  });

  it("applies variant border class on details", () => {
    const { container } = render(
      <DetailsPanel variant="danger" summary="X">
        <p>Y</p>
      </DetailsPanel>,
    );
    const details = container.querySelector("details");
    expect(details?.className).toContain("border-danger");
  });

  it("forwards id to the details element", () => {
    render(
      <DetailsPanel id="legal-disclosure" summary="Legal">
        <p>Terms</p>
      </DetailsPanel>,
    );
    expect(document.getElementById("legal-disclosure")?.tagName).toBe(
      "DETAILS",
    );
  });

  it("renders optional icon in summary row", () => {
    render(
      <DetailsPanel summary="With icon" icon={<span data-testid="ico">!</span>}>
        <p>Body</p>
      </DetailsPanel>,
    );
    expect(screen.getByTestId("ico")).toBeInTheDocument();
  });
});
