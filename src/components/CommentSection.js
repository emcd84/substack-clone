import { React } from "react";
import styles from "../styles/CommentSection.module.css";
import CommentBox from "./CommentBox";
import Comment from "./Comment";

export default function CommentSection(props) {
  return (
    <div id={styles.container}>
      {props.commentCount > 0 && (
        <h1 id={styles.header}>{`${props.commentCount} Comments`}</h1>
      )}
      {props.commentCount === 0 && <h1 id={styles.header}>{`Comments`}</h1>}
      <CommentBox
        getComments={props.getComments}
        postId={props.postId}
        type='parent'
      />
      {props.comments.map((comment) => {
        return (
          <Comment
            postId={props.postId}
            key={comment.id}
            type='parent'
            comment={comment}
            getComments={props.getComments}
            parentComment={""}
          />
        );
      })}
    </div>
  );
}
