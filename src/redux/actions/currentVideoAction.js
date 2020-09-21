import axios from "axios";
import config from "../../config";
import {
    SET_COMMENTS,
  SET_CURRENT_VIDEO,
  TOGGLE_CURRENT_VIDEO_FETCHING_STATE,
} from "../actionTypes";

export const fetchVideo = (videoId) => async (dispatch, getState) => {
  try {
    dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE });
    const { data } = await axios(
      `${config.BASE_URL}/videos?part=snippet,contentDetails,statistics&key=${config.API_KEY}&id=${videoId}
      `
    );
    console.log("changed state");
   dispatch({ type: SET_CURRENT_VIDEO, payload: data });
   console.log("Fetched Video")
  } catch (err) {
    console.error(err);
  } finally {
      console.log("Changed state again");
    dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE });
  }
};

export const fetchComments = (videoId) => async (dispatch, getState) => {
    try {
      dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE });
      const { data } = await axios(
        `${config.BASE_URL}/commentThreads?part=snippet,replies&key=${config.API_KEY}&videoId=${videoId}
        `
      );
      console.log("changed state");
      dispatch({ type: SET_COMMENTS, payload: data });
      console.log("Fetched comments")

    } catch (err) {
      console.error(err);
    } finally {
        console.log("Changed state again");

      dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE });
    }
  };