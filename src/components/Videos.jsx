import React from "react";
import { CardDeck } from "reactstrap";
import VideoListItem from "./VideoListItem";
const Video = ({ videos, mode = "trending" }) => {
  return (
    <CardDeck style={{ padding: "10px", margin: "auto" }}>
      {videos.map((video) => (
        <VideoListItem
          key={mode === "trending" ? video.id : video.id.videoId}
          video={video}
          mode={mode}
        />
      ))}
    </CardDeck>
  );
};

export default Video;
