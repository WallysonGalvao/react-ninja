import { combineReducers } from "redux";
import address from "./address";
import todos from "./todos";
import visibilityFilter from "./visibility-filter";

const rootReducer = combineReducers({
  address,
  todos,
  visibilityFilter,
});

export default rootReducer;
