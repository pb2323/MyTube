import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const VideoListItem = ({ video, mode }) => {
  return (
    <div>
      <Link
        to={`/videos/${mode === "trending" ? video.id : video.id.videoId}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Card style={{ marginBottom: "10px", width: "400px" }}>
          <CardImg
            top
            width="100%"
            src={video.snippet.thumbnails.high.url}
            alt="Video thumbnail"
          />
          <CardBody>
            <CardTitle>{video.snippet.title}</CardTitle>
            <CardSubtitle>Channel :{video.snippet.channelTitle}</CardSubtitle>
            <CardText>
              Description :
              {video.snippet.description.slice(
                0,
                Math.min(100, video.snippet.description.length)
              ) + "..."}
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};
export default VideoListItem;
