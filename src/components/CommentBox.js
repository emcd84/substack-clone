import { React, useState } from "react";
import styles from "../styles/CommentBox.module.css";

export default function CommentBox(props) {
  const [commentText, setCommentText] = useState("");

  function trackCommentText(e) {
    setCommentText(e.target.value);
  }

  function textAreaId() {
    if (props.type === "parent") {
      return styles.parentInput;
    } else if (props.type === "child") {
      return styles.childInput;
    }
  }

  return (
    <div id={styles.container}>
      <div id={styles.commentBox}>
        <img
          id={styles.img}
          src='https://substackcdn.com/image/fetch/w_80,h_80,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Favatars%2Forange.png'
          alt='default'
        ></img>
        <textarea
          placeholder='Write a comment...'
          className={styles.commentInput}
          id={textAreaId()}
          onChange={trackCommentText}
        ></textarea>
      </div>
      {props.type === "parent" && commentText.length > 0 && (
        <div className={styles.buttonContainer}>
          <button className={styles.postButton} id={styles.parentPostButton}>
            Post
          </button>
        </div>
      )}
      {props.type === "child" && (
        <div className={styles.buttonContainer}>
          <button
            className={styles.postButton}
            id={styles.childCancelButton}
            onClick={props.cancelCommentBox}
          >
            Cancel
          </button>
          <button className={styles.postButton} id={styles.childPostButton}>
            Post
          </button>
        </div>
      )}
    </div>
  );
}
