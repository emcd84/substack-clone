import React from "react";
import PostContainer from "../components/PostContainer";
import styles from "../styles/Archivepage.module.css";

export default function Archivepage(props) {
  return (
    <div id={styles.container}>
      <PostContainer posts={props.posts} />
    </div>
  );
}
