import createReducer from "../create-reducer";
import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO } from "./actions";

const INITIAL_STATE = {
  opened: false,
};

const ui = createReducer(INITIAL_STATE, {
  [OPEN_REGISTER_VIDEO]: (state) => ({
    ...state,
    opened: true,
  }),
  [CLOSE_REGISTER_VIDEO]: (state) => ({
    ...state,
    opened: false,
  }),
});

export default ui;
