import React from "react";
import PostInfo from "../components/PostInfo";
import SocialFooter from "../components/SocialFooter";
import PostContainer from "../components/PostContainer";
import CommentSection from "../components/CommentSection";
import styles from "../styles/Post.module.css";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Post(props) {
  async function likeOrUnlikePost() {
    const currentLikes = props.post.likes;
    const postRef = doc(db, "posts", props.post.id);

    let newLikes;
    if (!props.postLiked) {
      newLikes = currentLikes + 1;
    } else {
      newLikes = currentLikes;
    }
    setDoc(postRef, { likes: newLikes }, { merge: true });
    props.togglePostLiked();
  }

  return (
    <div id={styles.outerContainer}>
      <div id={styles.container}>
        <h1 id={styles.postTitle}>{props.post.title}</h1>
        <h2 id={styles.postSubtitle}>{props.post.subtitle}</h2>
        <PostInfo
          author={props.post.author}
          date={props.post.date}
          likes={props.post.likes}
          likeOrUnlikePost={likeOrUnlikePost}
          postLiked={props.postLiked}
          togglePostLiked={props.togglePostLiked}
        />
        <div id={styles.contentDiv}>
          <p id={styles.contentText}>{props.post.text}</p>
        </div>
        <SocialFooter
          likes={props.post.likes}
          likeOrUnlikePost={likeOrUnlikePost}
          postLiked={props.postLiked}
          togglePostLiked={props.togglePostLiked}
        />
        <CommentSection postId={props.post.id} />
        <PostContainer mode='footer' posts={props.posts} />
      </div>
    </div>
  );
}
