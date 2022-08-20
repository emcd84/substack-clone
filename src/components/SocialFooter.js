import React from "react";
import SocialIcons from "../components/SocialIcons";
import styles from "../styles/SocialFooter.module.css";

export default function SocialFooter(props) {
  return (
    <div id={styles.container}>
      {props.likes > 0 && !props.postLiked && (
        <h3 id={styles.likePostText}>{`${props.likes} likes`}</h3>
      )}
      {props.likes > 0 && props.postLiked && (
        <h3 id={styles.likePostText}>{`${props.likes + 1} likes`}</h3>
      )}
      {props.likes === 0 && (
        <div id={styles.left} onClick={props.togglePostLiked}>
          <div id={styles.iconDiv}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              id={styles.icon}
            >
              <line
                className={styles.line}
                x1='12'
                y1='5'
                x2='12'
                y2='19'
              ></line>
              <line
                className={styles.line}
                x1='5'
                y1='12'
                x2='19'
                y2='12'
              ></line>
            </svg>
          </div>
          <h3 id={styles.likePostText}>Like this post</h3>
        </div>
      )}
      <SocialIcons
        likes={props.likes}
        likeOrUnlikePost={props.likeOrUnlikePost}
        postLiked={props.postLiked}
        togglePostLiked={props.togglePostLiked}
      />
    </div>
  );
}
