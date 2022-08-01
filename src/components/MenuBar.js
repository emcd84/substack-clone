import React from "react";
import styles from "../styles/MenuBar.module.css";
import { NavLink } from "react-router-dom";

export default function MenuBar() {
  // const subscribeOnClick = () => {
  //   return null;
  // };
  // const signInOnClick = () => {
  //   return null;
  // };

  const generateNavLinkClassName = (isActive) => {
    if (isActive.isActive) {
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
        <NavLink
          className={(isActive) => generateNavLinkClassName(isActive)}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={(isActive) => generateNavLinkClassName(isActive)}
          to='/archive'
        >
          Archive
        </NavLink>
        <NavLink
          className={(isActive) => generateNavLinkClassName(isActive)}
          to='/about'
        >
          About
        </NavLink>
      </div>
    </div>
  );
}
