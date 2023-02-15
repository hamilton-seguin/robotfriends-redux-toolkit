//import action
import { searchFieldChange } from "../searchBoxSlice";
import { mockStore } from "../../../setupTests";

const store = mockStore;

it("should dispatch change action", () => {
  // Dispatch the action
  store.dispatch(searchFieldChange());

  // Test
  const actions = store.getActions();
  const expectedPayload = { type: "searchRobots/searchFieldChange" };

  expect(actions[0]).toEqual(expectedPayload);
});
