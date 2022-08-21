import React from "react";
import styles from "../styles/NewsletterHeader.module.css";
import ProfileIcon from "./ProfileIcon";
import { useNavigate } from "react-router-dom";

export default function NewsletterHeader(props) {
  const navigate = useNavigate();

  function getButtonContainerClass() {
    if (props.subscribed === true) {
      return `${styles.buttonContainer} ${styles.subscribedButtonContainer}`;
    } else {
      return styles.buttonContainer;
    }
  }

  return (
    <div id={styles.container} data-testid='MenuBar'>
      <div id={styles.headerContainer}>
        <h1 id={styles.headerText} onClick={() => navigate("/")}>
          My Newsletter
        </h1>
      </div>
      <div className={getButtonContainerClass()}>
        {!props.subscribed && (
          <button
            id={styles.subscribeButton}
            onClick={() => navigate("/subscribe")}
          >
            Subscribe
          </button>
        )}
        {!props.loggedIn && (
          <button id={styles.signInButton} onClick={() => navigate("/signIn")}>
            Sign In
          </button>
        )}
        {props.loggedIn && <ProfileIcon />}
      </div>
    </div>
  );
}
