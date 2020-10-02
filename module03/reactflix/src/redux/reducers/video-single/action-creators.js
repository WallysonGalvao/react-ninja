import { SELECT_VIDEO_SINGLE } from "./actions";

export const selecteVideoSingle = (id) => ({
  type: SELECT_VIDEO_SINGLE,
  payload: { id },
});
