import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

test("Button visible", () => {
  render(<App />);

  expect(screen.getByTestId("color-change")).toBeVisible();
});

test("Button color change", async () => {
  render(<App />);

  const button = screen.getByTestId("color-change");

  const initialClasses = button.className.split(" ");

  expect(initialClasses.includes("bg-red-500")).toBeTruthy();

  await userEvent.click(button);

  const updatedClasses = button.className.split(" ");

  expect(updatedClasses.includes("bg-green-500")).toBeTruthy();
});
