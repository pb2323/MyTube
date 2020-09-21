import React, { Component } from "react";

class CommentListItem extends Component {
  render() {
    const {
      snippet: { topLevelComment },
    } = this.props.comment;
    return (
      <div style={{ border: "2px solid black" }}>
        <img
          src={topLevelComment.snippet.authorProfileImageUrl}
          alt="Author"
          style={{ borderRadius: "50%", height: "30px", width: "30px" }}
        />
        <p>User: {topLevelComment.snippet.authorDisplayName}</p>
        <p>{topLevelComment.snippet.textOriginal}</p>
      </div>
    );
  }
}

export default CommentListItem;
