import React from "react";
import PostPreview from "./PostPreview";
import styles from "../styles/PostContainer.module.css";

export default function PostContainer(props) {
  return (
    <div id={styles.container}>
      <div id={styles.topBar}>
        <span id={styles.newHeader}>New</span>
        <svg
          id={styles.icon}
          role='img'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth='1'
          stroke='#000'
          xmins='http://www.w3.org/2000/svg'
        >
          <g>
            <title></title>
            <path
              className={styles.iconPath}
              d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
              stroke='#555555'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              className={styles.iconPath}
              d='M21.0004 21.0004L16.6504 16.6504'
              stroke='#555555'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </g>
        </svg>
      </div>
      <div id={styles.postsContainer}>
        {props.posts.map((post) => {
          return <PostPreview key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
