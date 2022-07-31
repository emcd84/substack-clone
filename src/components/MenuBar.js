import React from "react";
import styles from "../styles/MenuBar.module.css";

export default function MenuBar() {
  // const subscribeOnClick = () => {
  //   return null;
  // };
  // const signInOnClick = () => {
  //   return null;
  // };

  return (
    <div id={styles.container}>
      <div id={styles.topContainer} data-testid='MenuBar'>
        <div id={styles.headerContainer}>
          <h1 id={styles.headerText}>My Newsletter</h1>
        </div>
        <div id={styles.buttonContainer}>
          <button id={styles.subscribeButton}>Subscribe</button>
          <button id={styles.signInButton}>Sign In</button>
        </div>
      </div>
      <div id={styles.bottomContainer}>
        <h1 className={styles.bottomText} id={styles.homeText}>
          Home
        </h1>
        <h1 className={styles.bottomText} id={styles.archiveText}>
          Archive
        </h1>
        <h1 className={styles.bottomText} id={styles.aboutText}>
          About
        </h1>
      </div>
    </div>
  );
}
