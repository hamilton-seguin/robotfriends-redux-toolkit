import { searchFieldChange } from "../searchBoxSlice";
import { mockStore } from "../../../setupTests";

const store = mockStore;

describe("searchRobots reducer", () => {
  it("dispatch the proper action", () => {
    store.dispatch(searchFieldChange());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "searchRobots/searchFieldChange" });
  });
  it("should return the initial (empty) state", () => {
    expect(searchFieldChange(undefined)).toEqual({
      type: "searchRobots/searchFieldChange",
      payload: undefined,
    });
  });
  it("should return the payload as new state", () => {
    expect(searchFieldChange("abc")).toEqual({
      type: "searchRobots/searchFieldChange",
      payload: "abc",
    });
  });
});
