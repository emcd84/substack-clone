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
    </div>
  );
}
