import React from "react";
import { render, screen } from "@testing-library/react";
import  "@testing-library/jest-dom"
import Header from "../Header";

it("displays a header", () => {
  render(<Header />);
  expect(screen.getByText("RobotFriends")).toBeInTheDocument();
});
it("never changes", () => {
  render(<Header />);
  expect(screen.getByText("RobotFriends")).toMatchSnapshot();
});