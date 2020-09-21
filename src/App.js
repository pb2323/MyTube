import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import VideoDetail from "./pages/VideoDetail";
import Search from "./components/search";
import SearchResultPage from "./components/searchResultPage";
import profilePage from "../src/pages/Profile";

import "./App.css";
import playlistPage from "./pages/playlistPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/videos/:videoId" component={VideoDetail} />
        <Route exact path="/search/:searchQuery" component={SearchResultPage} />
        <Route exact path="/playlists" component={playlistPage} />
        <Route exact path="/profile" component={profilePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
