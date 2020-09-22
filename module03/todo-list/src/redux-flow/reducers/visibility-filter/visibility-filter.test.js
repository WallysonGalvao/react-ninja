import visibilityFilter, { initialState } from ".";
import {
  SET_VISIBILITY_FILTER,
  SHOW_COMPLETED,
  SHOW_ALL,
  SHOW_ACTIVE,
} from "./actions";

describe("Visibility", () => {
  /*
  it("should be a function", () => {
    expect(visibilityFilter).toBeInstanceOf(Function);
  });
  */

  it("should show all todos", () => {
    const before = SHOW_COMPLETED;
    const action = {
      type: SET_VISIBILITY_FILTER,
      payload: {
        filter: SHOW_ALL,
      },
    };
    const after = SHOW_ALL;
    expect(visibilityFilter(before, action)).toEqual(after);
  });

  it("should show just completed todos", () => {
    const before = SHOW_COMPLETED;
    const action = {
      type: SET_VISIBILITY_FILTER,
      payload: {
        filter: SHOW_COMPLETED,
      },
    };
    const after = SHOW_COMPLETED;
    expect(visibilityFilter(before, action)).toEqual(after);
  });

  it("should show just active todos", () => {
    const before = SHOW_ALL;
    const action = {
      type: SET_VISIBILITY_FILTER,
      payload: {
        filter: SHOW_ACTIVE,
      },
    };
    const after = SHOW_ACTIVE;
    expect(visibilityFilter(before, action)).toEqual(after);
  });

  /*
  it("should return latest state when action is unknown", () => {
    const before = SHOW_COMPLETED;
    const action = {
      type: "UNKNOWN",
      payload: {
        filter: SHOW_ALL,
      },
    };
    const after = SHOW_COMPLETED;
    expect(visibilityFilter(before, action)).toEqual(after);
  });
  

  it("should return initialState when latest state is undefined", () => {
    const before = undefined;
    const action = {};
    const after = initialState;
    expect(visibilityFilter(before, action)).toEqual(after);
  });
  */
});
