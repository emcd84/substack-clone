import { React, useState } from "react";
import styles from "../styles/CommentBox.module.css";

export default function CommentBox() {
  const [commentText, setCommentText] = useState("");

  function trackCommentText(e) {
    setCommentText(e.target.value);
  }

  return (
    <div id={styles.container}>
      <div id={styles.commentBox}>
        <img
          id={styles.img}
          src='https://substackcdn.com/image/fetch/w_80,h_80,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Favatars%2Forange.png'
        ></img>
        <textarea
          placeholder='Write a comment...'
          id={styles.commentInput}
          onChange={trackCommentText}
        ></textarea>
      </div>
      {commentText.length > 0 && (
        <div id={styles.buttonContainer}>
          <button id={styles.postButton}>Post</button>
        </div>
      )}
    </div>
  );
}
