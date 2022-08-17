import { React, useState } from "react";
import styles from "../styles/Comment.module.css";
import CommentBox from "./CommentBox";
import CommentReplies from "./CommentReplies";

export default function Comment(props) {
  const [commentBoxDisplayed, setCommentBoxDisplayed] = useState(false);

  function cancelCommentBox() {
    setCommentBoxDisplayed(false);
  }

  return (
    <div className={styles.container}>
      <div id={styles.left}>
        <img
          id={styles.img}
          src='https://substackcdn.com/image/fetch/w_66,h_66,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Favatars%2Flogged-out.png'
          sizes='100vw'
          alt=''
        ></img>
        <div id={styles.lineDiv}></div>
      </div>
      <div id={styles.commentContent}>
        <div id={styles.commentHeader}>
          <h1 id={styles.authorText}>{props.comment.author}</h1>
          <h2 id={styles.dateText}>{props.comment.date}</h2>
        </div>
        <p id={styles.contentText}>{props.comment.content}</p>
        <div id={styles.commentFooter}>
          <div id={styles.likesDiv}>
            <svg
              role='img'
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='transparent'
              strokeWidth='1.5'
              stroke='#757575'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <title></title>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='transparent'
                  stroke='#757575'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'></path>
                </svg>
              </g>
            </svg>
            <h4 className={styles.footerText}>{props.comment.likes}</h4>
          </div>
          <h4
            className={styles.footerText}
            onClick={() => setCommentBoxDisplayed(true)}
          >
            Reply
          </h4>
          <h4 className={styles.footerText}>Collapse</h4>
        </div>
        {commentBoxDisplayed && (
          <CommentBox type='child' cancelCommentBox={cancelCommentBox} />
        )}
        <CommentReplies type={props.type} replies={props.comment.replies} />
      </div>
    </div>
  );
}
