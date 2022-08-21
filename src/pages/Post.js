import { React, useState, useEffect } from "react";
import PostInfo from "../components/PostInfo";
import SocialFooter from "../components/SocialFooter";
import PostContainer from "../components/PostContainer";
import CommentSection from "../components/CommentSection";
import styles from "../styles/Post.module.css";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Post(props) {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  function countCommentThread(comment) {
    if (comment.replies.length === 0) {
      return 1;
    } else {
      let replyCount = 0;
      for (let i = 0; i < comment.replies.length; i++) {
        replyCount += countCommentThread(comment.replies[i]);
      }
      return 1 + replyCount;
    }
  }

  function countComments() {
    let count = 0;
    for (let i = 0; i < comments.length; i++) {
      count += countCommentThread(comments[i]);
    }
    return count;
  }

  async function getComments() {
    const postRef = doc(db, "posts", props.post.id);
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) {
      const postData = postSnap.data();
      setCommentCount(countComments(postData.comments));
      setComments(postData.comments);
    }
  }

  useEffect(() => {
    getComments();
  }, []);

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
          date={props.post.publishDate}
          likes={props.post.likes}
          comments={commentCount}
          likeOrUnlikePost={likeOrUnlikePost}
          postLiked={props.postLiked}
          togglePostLiked={props.togglePostLiked}
        />
        <div id={styles.contentDiv}>
          <p id={styles.contentText}>{props.post.text}</p>
        </div>
        <SocialFooter
          likes={props.post.likes}
          comments={commentCount}
          likeOrUnlikePost={likeOrUnlikePost}
          postLiked={props.postLiked}
          togglePostLiked={props.togglePostLiked}
        />
        <CommentSection
          postId={props.post.id}
          comments={comments}
          getComments={getComments}
          commentCount={commentCount}
        />
        <PostContainer mode='footer' posts={props.posts} />
      </div>
    </div>
  );
}
