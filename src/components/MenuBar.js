import React from "react";
import styles from "../styles/MenuBar.module.css";

export default function MenuBar() {
  return (
    <div id={styles.container} data-testid='MenuBar'>
      <div id={styles.headerContainer}>
        <h1 id={styles.headerText}>My Newsletter</h1>
      </div>
      <div id={styles.buttonContainer}>
        <button id={styles.subscribeButton}>Subscribe</button>
        <button id={styles.signInButton}>Sign In</button>
      </div>
    </div>
  );

  const subscribeOnClick = () => {
    return null;
  };
  const signInOnClick = () => {
    return null;
  };
}
