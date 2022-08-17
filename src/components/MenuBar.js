import React from "react";
import styles from "../styles/MenuBar.module.css";
import { NavLink, Outlet } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import { useNavigate } from "react-router-dom";

export default function MenuBar(props) {
  const navigate = useNavigate();

  const generateNavLinkClassName = (isActive) => {
    if (isActive.isActive) {
      return `${styles.bottomText} ${styles.selectedText}`;
    } else {
      return `${styles.bottomText}`;
    }
  };

  return (
    <div id={styles.totalContainer}>
      <div id={styles.container}>
        <div id={styles.topContainer} data-testid='MenuBar'>
          <div id={styles.headerContainer}>
            <h1 id={styles.headerText}>My Newsletter</h1>
          </div>
          <div id={styles.buttonContainer}>
            <button id={styles.subscribeButton}>Subscribe</button>
            {!props.loggedIn && (
              <button
                id={styles.signInButton}
                onClick={() => navigate("/signIn")}
              >
                Sign In
              </button>
            )}
            {props.loggedIn && <ProfileIcon />}
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
      <Outlet />
    </div>
  );
}
