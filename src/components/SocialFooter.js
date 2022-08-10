import React from "react";
import SocialIcons from "../components/SocialIcons";
import styles from "../styles/SocialFooter.module.css";

export default function SocialFooter() {
  return (
    <div id={styles.container}>
      <div id={styles.left}>
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
            <line className={styles.line} x1='12' y1='5' x2='12' y2='19'></line>
            <line className={styles.line} x1='5' y1='12' x2='19' y2='12'></line>
          </svg>
        </div>
        <h3 id={styles.likePostText}>Like this post</h3>
      </div>
      <SocialIcons />
    </div>
  );
}
