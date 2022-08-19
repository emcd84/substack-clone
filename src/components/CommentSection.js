import { React, useState, useEffect } from "react";
import CommentBox from "./CommentBox";
import Comment from "./Comment";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import PostInfo from "./PostInfo";

export default function CommentSection(props) {
  const [comments, setComments] = useState([]);
  // const comments = [
  //   {
  //     id: "101",
  //     author: "Jimmy",
  //     date: "08/01/2022",
  //     content: "Well done!",
  //     likes: 3,
  //     replies: [
  //       {
  //         id: "102",
  //         author: "Donald",
  //         date: "08/01/2022",
  //         content: "Agreed.",
  //         likes: 0,
  //         replies: [],
  //       },
  //     ],
  //   },
  // ];

  async function getComments() {
    const postRef = doc(db, "posts", props.postId);
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) {
      const postData = postSnap.data();
      setComments(postData.comments);
    }
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <CommentBox
        getComments={getComments}
        postId={props.postId}
        type='parent'
      />
      {comments.map((comment) => {
        return (
          <Comment
            postId={props.postId}
            key={comment.id}
            type='parent'
            comment={comment}
            getComments={getComments}
            parentComment={""}
          />
        );
      })}
    </div>
  );
}
