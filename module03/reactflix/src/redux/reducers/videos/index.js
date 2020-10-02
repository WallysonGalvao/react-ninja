import createReducer from "../create-reducer";
import { ADD_VIDEO } from "./actions";

const INITIAL_STATE = {};

const videos = createReducer(INITIAL_STATE, {
  [ADD_VIDEO]: (state, action) => {
    const { id, title } = action.payload;
    return {
      ...state,
      [id]: { id, title },
    };
  },
});

export default videos;
