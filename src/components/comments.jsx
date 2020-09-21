import React from "react";
import CommentListItem from "./commentsListItem";

const Comments = ({ comments }) => {
  return comments.map((comment) => (
    <CommentListItem key={comment.id} comment={comment} />
  ));
};

export default Comments;
