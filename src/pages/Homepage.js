import { React } from "react";
import styles from "../styles/Homepage.module.css";
import TopPostPreview from "../components/TopPostPreview";
import PostPreview from "../components/PostPreview";

export default function Homepage() {
  return (
    <div id={styles.container} data-testid='Homepage'>
      <TopPostPreview
        title="Dissecting Brad Lambert's Liiga troubles"
        subtitle="Why hasn't Lambert enjoyed the draft year success that was expected from him?"
        author='DRAFTLOOKHOCKEY'
      />
      <PostPreview
        title='Miro Heiskanen and passive/aggressive forechecks'
        subtitle="Tampa Bay limits Miro Heiskanen's transition abilities byp giving him more time to make a play, not less"
        author='DRAFTLOOKHOCKEY'
        date='2022-08-01'
      />
    </div>
  );
}
