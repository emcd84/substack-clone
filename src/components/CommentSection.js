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
      replies: [
        {
          author: "Donald",
          date: "08/01/2022",
          content: "Agreed.",
          likes: 0,
          replies: [],
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Comments</h1>
      <CommentBox type='parent' />
      {comments.map((comment) => {
        return <Comment type='topLevel' comment={comment} />;
      })}
    </div>
  );
}
