import todos, { initialState } from "./index";
import { ADD_TODO, TOGGLE_TODO } from "./actions";

describe("Redux", () => {
  it("should todos be a function", () => {
    expect(todos).toBeInstanceOf(Function);
  });

  it("should add a todo item", () => {
    const action = {
      type: ADD_TODO,
      payload: {
        id: 0,
        text: "Hey",
      },
    };

    const after = [
      {
        id: 0,
        text: "Hey",
        completed: false,
      },
    ];

    expect(todos([], action)).toEqual(after);
  });

  it("should add a new todo item", () => {
    const before = [{ id: 0, text: "Hey", completed: false }];
    const action = { type: ADD_TODO, payload: { id: 1, text: "Ho" } };
    const after = [
      { id: 0, text: "Hey", completed: false },
      { id: 1, text: "Ho", completed: false },
    ];

    expect(todos(before, action)).toEqual(after);
  });

  it("should toggle first todo", () => {
    const before = [
      { id: 0, text: "Hey", completed: false },
      { id: 1, text: "Ho", completed: false },
    ];

    const action = {
      type: TOGGLE_TODO,
      payload: { id: 0 },
    };

    const after = [
      { id: 0, text: "Hey", completed: true },
      { id: 1, text: "Ho", completed: false },
    ];

    expect(todos(before, action)).toEqual(after);
  });

  it("should toggle second todo", () => {
    const before = [
      { id: 0, text: "Hey", completed: false },
      { id: 1, text: "Ho", completed: false },
    ];

    const action = {
      type: TOGGLE_TODO,
      payload: { id: 1 },
    };

    const after = [
      { id: 0, text: "Hey", completed: false },
      { id: 1, text: "Ho", completed: true },
    ];

    expect(todos(before, action)).toEqual(after);
  });

  it("should return the latest state when action is unknown", () => {
    const before = [{ id: 0, text: "Hey", completed: false }];
    const action = { type: "ANYTHING" };
    const after = [{ id: 0, text: "Hey", completed: false }];

    expect(todos(before, action)).toEqual(after);
  });

  it("should return initialState when state before is undefined", () => {
    const before = undefined;
    const action = {};
    const after = initialState;
    expect(todos(before, action)).toEqual(after);
  });
});
