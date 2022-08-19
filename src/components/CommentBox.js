import { React, useState, useEffect } from "react";
import styles from "../styles/CommentBox.module.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc, arrayUnion, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import uniqid from "uniqid";

export default function CommentBox(props) {
  const [commentText, setCommentText] = useState("");
  const navigate = useNavigate();

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

  function postComment() {
    const auth = getAuth();
    let comment;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const currentUser = auth.currentUser;
        comment = {
          id: uniqid(),
          name: currentUser.email,
          date: new Date().toLocaleDateString(),
          content: commentText,
          likes: 0,
          replies: [],
        };
        uploadComment(comment);
        if (props.type === "child") {
          props.cancelCommentBox();
        }
      } else {
        navigate("/signIn");
      }
    });
  }

  async function uploadComment(comment) {
    if (!props.parentComment) {
      const postRef = doc(db, "posts", props.postId);
      await updateDoc(postRef, {
        comments: arrayUnion(comment),
      }).catch((error) => {
        alert("Comment upload failed: try again.");
      });
    } else {
      const parentComments = props.parentComment.split(" ");
      const postRef = doc(db, "posts", props.postId);
      const postSnap = await getDoc(postRef);
      if (postSnap.exists()) {
        let postData = postSnap.data();
        let parentComment = postData.comments.find(
          (comment) => comment.id === parentComments[0]
        );
        for (let i = 1; i < parentComments.length; i++) {
          parentComment = parentComment.replies.find(
            (comment) => comment.id === parentComments[i]
          );
        }
        parentComment.replies.push(comment);
        await setDoc(postRef, postData);
      }
    }
    props.getComments();
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
          <button
            className={styles.postButton}
            id={styles.parentPostButton}
            onClick={postComment}
          >
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
          <button
            className={styles.postButton}
            id={styles.childPostButton}
            onClick={postComment}
          >
            Post
          </button>
        </div>
      )}
    </div>
  );
}
