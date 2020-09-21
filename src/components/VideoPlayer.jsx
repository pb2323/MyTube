import React from "react";
import { Jumbotron, Button } from "reactstrap";

const VideoPlayer = ({ video }) => {
  const { contentDetails, snippet, statistics, id } = video.items[0];
  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="video"
          src={`https://youtube.com/embed/${id}`}
          className="embed-responsive-item"
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      </div>
      <Jumbotron>
        <h1 className="display-6" style={{ fontSize: "20px" }}>
          {snippet.title}
        </h1>
        <p className="lead">{snippet.channelTitle}</p>
        <hr className="my-4" />
        <p>{snippet.description}</p>
        <p className="lead">Views: {statistics.viewCount}</p>
        <p className="lead">Like Count: {statistics.likeCount}</p>
        <p className="lead">Dislike Count: {statistics.dislikeCount}</p>
      </Jumbotron>
    </>
  );
};

export default VideoPlayer;
