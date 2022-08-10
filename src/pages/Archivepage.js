import React from "react";
import PostContainer from "../components/PostContainer";
import styles from "../styles/Archivepage.module.css";

export default function Archivepage(props) {
  return (
    <div id={styles.container}>
      <div id={styles.postContainerWrapper}>
        <PostContainer posts={props.posts} />
      </div>
    </div>
  );
}
