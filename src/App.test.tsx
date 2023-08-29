import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { App, WrappedApp } from "./App";

describe("App", () => {
  it("Renders hello world", () => {
    render(<WrappedApp />);

    const element = screen.getByRole("heading", { level: 1 });
    expect(element).not.toBeNull();
    expect(element.textContent).toBe("Hello World");
  });

  it ("Renders not found", () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );

    expect(
      expect(
        screen.getByRole("heading", { level: 1 })
          .textContent).toBe("Not Found")
    )
  });
});
