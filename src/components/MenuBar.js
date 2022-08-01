import React from "react";
import styles from "../styles/MenuBar.module.css";
import { Link } from "react-router-dom";

export default function MenuBar(props) {
  // const subscribeOnClick = () => {
  //   return null;
  // };
  // const signInOnClick = () => {
  //   return null;
  // };

  const getBottomTextDivClassName = (mode, div) => {
    if (mode === div) {
      return `${styles.bottomTextDiv} ${styles.selectedDiv}`;
    } else {
      return `${styles.bottomTextDiv}`;
    }
  };

  const getBottomTextClassName = (mode, div) => {
    if (mode === div) {
      return `${styles.bottomText} ${styles.selectedText}`;
    } else {
      return `${styles.bottomText}`;
    }
  };

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
        <div className={getBottomTextDivClassName(props.mode, "home")}>
          <Link className={getBottomTextClassName(props.mode, "home")} to='/'>
            Home
          </Link>
        </div>
        <div className={getBottomTextDivClassName(props.mode, "archive")}>
          <Link
            className={getBottomTextClassName(props.mode, "archive")}
            to='/archive'
          >
            Archive
          </Link>
        </div>
        <div className={getBottomTextDivClassName(props.mode, "about")}>
          <Link
            className={getBottomTextClassName(props.mode, "about")}
            to='/about'
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
