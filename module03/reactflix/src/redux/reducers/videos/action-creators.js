import { db } from "../../../config/firebase";
import { ADD_VIDEO } from "./actions";

export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title },
});

export const registerVideo = ({ id, title }) => async (dispatch) => {
  await db.ref("videos").child(id).update({ id, title });

  dispatch(addVideo({ id, title }));
};

export const fetchVideos = () => (dispatch) => {
  db.ref("videos")
    .orderByChild("title")
    .on("value", (snap) =>
      snap.forEach((child) => dispatch(addVideo(child.val())))
    );
};
