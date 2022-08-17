import { React, useState } from "react";
import styles from "../styles/CommentReplies.module.css";
import Comment from "./Comment";

export default function CommentReplies(props) {
  const [repliesDisplayed, setRepliesDisplayed] = useState(false);
  if (!repliesDisplayed && props.type === "topLevel") {
    return (
      <div id={styles.notDisplayed} onClick={() => setRepliesDisplayed(true)}>
        <h1 id={styles.numRepliesText}>{`${props.replies.length} replies`}</h1>
      </div>
    );
  } else if (repliesDisplayed) {
    return (
      <div id={styles.displayed}>
        {props.replies.map((reply) => {
          return <Comment comment={reply} />;
        })}
        <h1
          id={styles.collapseRepliesText}
          onClick={() => setRepliesDisplayed(false)}
        >
          Collapse Replies
        </h1>
      </div>
    );
  }
}
