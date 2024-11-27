import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "../Button";

test("Green solid button", () => {
  render(<Button color="green" variant="solid" />);

  const classes = screen.getByTestId("button").className.split(" ");
  const classesToCheck = ["bg-green-500", "hover:bg-green-600"];

  expect(classesToCheck.every((val) => classes.includes(val))).toBeTruthy();
});

test("Red solid button", () => {
  render(<Button color="red" variant="solid" />);

  const classes = screen.getByTestId("button").className.split(" ");
  const classesToCheck = ["bg-red-500", "hover:bg-red-600"];

  expect(classesToCheck.every((val) => classes.includes(val))).toBeTruthy();
});

test("Green outlined button", () => {
  render(<Button color="green" variant="outlined" />);

  const classes = screen.getByTestId("button").className.split(" ");
  const classesToCheck = ["outline", "outline-green-600", "hover:bg-green-600"];

  expect(classesToCheck.every((val) => classes.includes(val))).toBeTruthy();
});

test("Red outlined button", () => {
  render(<Button color="red" variant="outlined" />);

  const classes = screen.getByTestId("button").className.split(" ");

  const classesToCheck = ["outline", "outline-red-600", "hover:bg-red-600"];

  expect(classesToCheck.every((val) => classes.includes(val))).toBeTruthy();
});
