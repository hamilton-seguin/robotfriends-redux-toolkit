import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "../Card";
import { renderWithProviders } from "../../../setupTests";

const mockCardDetails = jest.fn();
jest.mock("../CardDetails", () => () => {
  mockCardDetails();
  return <modal-carddetails />;
});

const cardProps = {
  id: 69,
  robot: {
    name: "Jeanne Graham",
    email: "Sincere@april.biz",
  },
};

it("receives props", () => {
  renderWithProviders(<Card {...cardProps} />);
  const details = screen.getByText(/jeanne/i);
  expect(details).toBeInTheDocument();
});
it("hides other cards when clicked", () => {
  renderWithProviders(<Card {...cardProps} />);
  const details = screen.getByText(/jean/i);
  expect(details).toMatchSnapshot()
});
