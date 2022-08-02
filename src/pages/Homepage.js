import { React } from "react";
import styles from "../styles/Homepage.module.css";
import TopPostPreview from "../components/TopPostPreview";

export default function Homepage() {
  return (
    <div id={styles.container} data-testid='Homepage'>
      <TopPostPreview
        title="Dissecting Brad Lambert's Liiga troubles"
        subtitle="Why hasn't Lambert enjoyed the draft year success that was expected from him?"
        author='DRAFTLOOKHOCKEY'
      />
    </div>
  );
}
