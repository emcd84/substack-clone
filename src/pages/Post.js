import React from "react";
import { Link } from "react-router-dom";
import PostInfo from "../components/PostInfo";
import SocialFooter from "../components/SocialFooter";
import PostContainer from "../components/PostContainer";
import styles from "../styles/Post.module.css";

export default function Post(props) {
  return (
    <div id={styles.container}>
      <h1 id={styles.postTitle}>{props.post.title}</h1>
      <h2 id={styles.postSubtitle}>{props.post.subtitle}</h2>
      <PostInfo author={props.post.author} date={props.post.date} />
      <div id={styles.contentDiv}>
        <p id={styles.contentText}>{props.post.text}</p>
      </div>
      <SocialFooter />
      <PostContainer mode='footer' posts={props.posts} />
      <Link id={styles.seeAllLink} to='/archive'>
        <h3 id={styles.seeAllText}>See All</h3>
        <svg
          role='img'
          width='12'
          height='12'
          viewBox='0 0 20 20'
          fill='none'
          strokeWidth='1'
          stroke='#000'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            <title></title>
            <path
              d='M7.5 15L12.5 10L7.5 5'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </g>
        </svg>
      </Link>
    </div>
  );
}
