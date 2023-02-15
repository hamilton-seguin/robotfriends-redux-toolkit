import React from "react";
import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

import CardList from "../CardList";
import { renderWithProviders } from "../../../setupTests";

const cardListMock = [
  {
    id: 1,
    name: "John Snow",
    email: "jmail.mais@gmail.com",
  },
];

describe("CardList", () => {
  it("should display error message on failure to get data", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: { cardListMock },
        isLoading: false,
        isSuccess: false,
        error: { error: "probleme here" },
      })
    );
    renderWithProviders(<CardList />);
    expect.assertions(1);
    await waitFor(() => {
      expect(screen.getByText(/oops/i)).toBeInTheDocument();
    });
  });
  it("should display loading", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: { cardListMock },
        isLoading: true,
        isSuccess: false,
        error: {},
      })
    );
    renderWithProviders(<CardList />);
    expect.assertions(1);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
  });
  it("should display data", async () => {
    fetchMock.disableMocks();
    renderWithProviders(<CardList />);
    expect.assertions(1);
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
    expect(screen.getByText(/leann/i)).toBeInTheDocument();
  });
});
