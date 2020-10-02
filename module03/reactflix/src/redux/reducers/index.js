import { combineReducers } from "redux";

import ui from "./ui";
import videos from "./videos";
import videoSingle from "./video-single";

const rootReducer = combineReducers({
  ui,
  videos,
  videoSingle,
});

export default rootReducer;
