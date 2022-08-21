import React from "react";
import styles from "../styles/SocialIcons.module.css";

export default function SocialIcons(props) {
  function getLikeIconDivClass() {
    if (props.likes === 0 && !props.postLiked) {
      return `${styles.iconDiv}`;
    } else {
      return `${styles.iconDiv} ${styles.iconWithLabelDiv}`;
    }
  }

  function getLikeIconDivID() {
    if (props.postLiked === true) {
      return styles.likedIconDiv;
    } else {
      return styles.notLikedIconDiv;
    }
  }

  function getLikedIconID() {
    if (props.postLiked === true) {
      return styles.likedIcon;
    } else {
      return styles.notLikedIcon;
    }
  }

  function getLikedLabelID() {
    if (props.postLiked === true) {
      return styles.likedLabel;
    } else {
      return styles.notLikedLabel;
    }
  }

  function getCommentIconDivClass() {
    if (props.comments === 0) {
      return `${styles.iconDiv}`;
    } else {
      return `${styles.iconDiv} ${styles.iconWithLabelDiv}`;
    }
  }

  return (
    <div id={styles.icons}>
      <div
        id={getLikeIconDivID()}
        className={getLikeIconDivClass()}
        onClick={props.likeOrUnlikePost}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={styles.icon}
          id={getLikedIconID()}
        >
          <path d='M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'></path>
        </svg>
        {props.postLiked && (
          <h1 className={styles.label} id={getLikedLabelID()}>
            {props.likes + 1}
          </h1>
        )}
        {!props.postLiked && props.likes > 0 && (
          <h1 className={styles.label} id={getLikedLabelID()}>
            {props.likes}
          </h1>
        )}
      </div>
      <div className={getCommentIconDivClass()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={styles.icon}
        >
          <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
        </svg>
        {props.comments > 0 && (
          <h1 className={styles.label}>{props.comments}</h1>
        )}
      </div>
      <div className={styles.iconDiv}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.icon}
        >
          <path
            d='M12.4376 15.6C4.77778 15.6 2 20.3999 2 20.3999C2 12.5999 5.88889 8.4 12.4376 8.4V3L22 11.9812L12.4376 21V15.6Z'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </div>
    </div>
  );
}
