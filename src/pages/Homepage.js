import { React } from "react";
import styles from "../styles/Homepage.module.css";
import TopPostPreview from "../components/TopPostPreview";
import PostContainer from "../components/PostContainer";

export default function Homepage() {
  const postArray = [
    {
      id: "1",
      title: "Miro Heiskanen and aggressive/passive forechecks",
      subtitle:
        "Tampa Bay limits Miro Heiskanen's transition abilities bpy giving him more time to make a play, not less",
      author: "draftlookhockey",
      date: "2022-08-01",
    },
    {
      id: "2",
      title: "2022 NHL Draft Notebook: Volume 1",
      subtitle:
        "Thoughts, clips, and areas to track for a variety of prospects",
      author: "draftlookhockey",
      date: "2022-01-10",
    },
  ];

  return (
    <div id={styles.container} data-testid='Homepage'>
      <TopPostPreview
        title="Dissecting Brad Lambert's Liiga troubles"
        subtitle="Why hasn't Lambert enjoyed the draft year success that was expected from him?"
        author='DRAFTLOOKHOCKEY'
      />
      <PostContainer posts={postArray} />
    </div>
  );
}
