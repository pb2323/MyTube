import { combineReducers } from "redux";
import videoReducer from "./reducers/videoreducer";
import userReducer from "./reducers/userReducer";
import currentVideoreducer from "./reducers/currentVideoReducer";
import playlistreducer from "./reducers/playlistReducer";

const rootReducer = combineReducers({
  videoState: videoReducer,
  userState: userReducer,
  currentVideoState: currentVideoreducer,
  playlistState: playlistreducer,
});

export default rootReducer;
