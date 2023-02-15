import { increment, decrement, reset } from "../counterSlice";
import { mockStore } from "../../../setupTests";
const store = mockStore;

const actions = store.getActions();

describe("counter reducer", () => {
  it("should dispatch the proper action: increment +1", () => {
    store.dispatch(increment());
    const expectedPayload = { type: "counter/increment" };
    expect(actions[0]).toEqual(expectedPayload);
  });
  it("should dispatch the proper action: decrement -1", () => {
    store.dispatch(decrement());
    const expectedPayload = { type: "counter/decrement" };
    expect(actions[1]).toEqual(expectedPayload);
  });
  it("should dispatch the proper action: reset counter state", () => {
    store.dispatch(reset());
    const expectedPayload = { type: "counter/reset" };
    expect(actions[2]).toEqual(expectedPayload);
  });
  it("should return the initial state", () => {   
    expect(increment()).toEqual({
      type: "counter/increment",
      payload: undefined,
    });
  });
  it("should reset to the initial state", () => {
    expect(reset()).toEqual({
      type: "counter/reset",
      payload: undefined,
    });
  });
});
