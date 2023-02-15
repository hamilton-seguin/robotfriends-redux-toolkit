import React from "react";
import renderer from "react-test-renderer";

import CardDetail from "../CardDetails";

it("shows extra details of Card component", () => {
  const tree = renderer.create(
    <CardDetail
      robot={{
        id: 1,
        company: {
          name: "zzz",
        },
        address: {
          city: "bla",
        },
      }}
    />
  );
  expect(tree).toMatchSnapshot();
});
