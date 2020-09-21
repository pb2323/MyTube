import React, { Component } from "react";
import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer";
import { fetchComments, fetchVideo } from "../redux/actions/currentVideoAction";
import Comment from "../components/comments";

class VideoDetail extends Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
    this.props.fetchComments(this.props.match.params.videoId);
  }
  render() {
    return (
      <div>
        {this.props.currentVideo ? (
          <VideoPlayer video={this.props.currentVideo} />
        ) : (
          <h1>Loading Video...</h1>
        )}

        {this.props.comments ? (
          <Comment comments={this.props.comments.items} />
        ) : (
          <h1>Loading comment...</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    currentVideo: storeState.currentVideoState.video,
    comments: storeState.currentVideoState.comments,
  };
};

export default connect(mapStateToProps, { fetchVideo, fetchComments })(
  VideoDetail
);
