import React from "react";
import CommentBox from "./CommentBox";
import Comment from "./Comment";

export default function CommentSection(props) {
  const comments = [
    {
      author: "Jimmy",
      date: "08/01/2022",
      content: "Well done!",
      likes: 3,
    },
  ];

  return (
    <div>
      <h1>Comments</h1>
      <CommentBox />
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
}
