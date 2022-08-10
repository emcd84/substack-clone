import { React } from "react";
import styles from "../styles/Homepage.module.css";
import TopPostPreview from "../components/TopPostPreview";
import PostContainer from "../components/PostContainer";

export default function Homepage(props) {
  return (
    <div id={styles.container} data-testid='Homepage'>
      <TopPostPreview post={props.posts.slice(0, 1)} />
      <div id={styles.postContainerWrapper}>
        <PostContainer mode='preview' posts={props.posts} />
      </div>
    </div>
  );
}
