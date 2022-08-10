import { React } from "react";
import styles from "../styles/Homepage.module.css";
import TopPostPreview from "../components/TopPostPreview";
import PostContainer from "../components/PostContainer";

export default function Homepage(props) {
  return (
    <div id={styles.container} data-testid='Homepage'>
      {props.posts.length > 0 && <TopPostPreview post={props.posts[0]} />}
      <div id={styles.postContainerWrapper}>
        <PostContainer mode='preview' posts={props.posts} />
      </div>
    </div>
  );
}
