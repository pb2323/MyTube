import { SET_PLAYLISTS, TOGGLE_PLAYLIST_FETCHING_STATE } from "../actionTypes";

const initialState = {
  playlists: null,
  isPlaylistFetching: false,
};

const videoReducer = (state = { initialState }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PLAYLISTS:
      return { ...state, videos: payload };
    case TOGGLE_PLAYLIST_FETCHING_STATE:
      return { ...state, isPlaylistFetching: !state.isPlaylistFetching };
    default:
      return state;
  }
};

export default videoReducer;
