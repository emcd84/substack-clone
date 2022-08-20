import React from "react";
import styles from "../styles/PostInfo.module.css";
import SocialIcons from "./SocialIcons";

export default function PostInfo(props) {
  return (
    <div id={styles.container}>
      <div id={styles.text}>
        <img
          id={styles.authorImg}
          src='https://substackcdn.com/image/fetch/w_64,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb6c207d8-8777-4669-88ee-48a67e8e7408_362x362.jpeg'
        ></img>
        <div id={styles.authorAndDate}>
          <h3 id={styles.postAuthor}>{props.author}</h3>
          <h4 id={styles.postDate}>{props.date}</h4>
        </div>
      </div>
      <SocialIcons
        likes={props.likes}
        likeOrUnlikePost={props.likeOrUnlikePost}
        postLiked={props.postLiked}
        togglePostLiked={props.togglePostLiked}
      />
    </div>
  );
}
