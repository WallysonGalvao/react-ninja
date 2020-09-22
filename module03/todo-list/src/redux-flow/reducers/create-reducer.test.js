import createReducer from "./create-reducer";

describe("CreateReducer", () => {
  let reducer;
  const initialState = 0;

  beforeEach(() => {
    reducer = createReducer(initialState, {
      INCREMENT: (state, action) => state + 1,
      DECREMENT: (state, action) => state - 1,
    });
  });

  it("should be a function", () => {
    expect(createReducer).toBeInstanceOf(Function);
  });

  it("should return a return function", () => {
    expect(createReducer([], {})).toBeInstanceOf(Function);
  });

  it("should create a reducer", () => {
    const before = 0;
    const action = { type: "INCREMENT" };
    const after = 1;

    expect(reducer(before, action)).toEqual(after);
  });

  it("should return latest state if action is unknown", () => {
    const before = 3;
    const action = { type: "UNKNOWN" };
    const after = 3;

    expect(reducer(before, action)).toEqual(after);
  });

  it("should return initalState when latest state is undefined", () => {
    const before = undefined;
    const action = {};
    const after = initialState;

    expect(reducer(before, action)).toEqual(after);
  });

  it("should not be undefined", () => {
    try {
      createReducer();
    } catch (error) {
      expect(error.message).toEqual("initialState should not be undefined");
    }
  });

  it("handleActions should not be different from object", () => {
    try {
      createReducer([]);
    } catch (error) {
      expect(error.message).toEqual(
        "createReducer expects the secondary argument as an object representing reducer"
      );
    }
  });
});
