import axios from "axios";
import config from "../../config";
import { SET_PLAYLISTS, TOGGLE_PLAYLIST_FETCHING_STATE } from "../actionTypes";

export const fetchPlaylists = (pageToken = "") => async (dispatch, getState) => {
  const accessToken = getState().userState.user.access_token;
  try {
    dispatch({ type: SET_PLAYLISTS, payload: null });
    dispatch({ type: TOGGLE_PLAYLIST_FETCHING_STATE });
    const { data } = await axios(
      `${config.BASE_URL}/playlists?mine=true&part=snippet&key=${
        config.API_KEY
      }&maxResults=15${pageToken.length !== 0 ? "&pageToken=" + pageToken : ""}
          `,
      {
        headers: {
          AUthorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      }
    );
    console.log(data);
    dispatch({ type: SET_PLAYLISTS, payload: data });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: TOGGLE_PLAYLIST_FETCHING_STATE });
  }
};
