import React from "react";
import styles from "../styles/NewsletterHeader.module.css";
import ProfileIcon from "./ProfileIcon";
import { useNavigate } from "react-router-dom";

export default function NewsletterHeader(props) {
  const navigate = useNavigate();
  return (
    <div id={styles.container} data-testid='MenuBar'>
      <div id={styles.headerContainer}>
        <h1 id={styles.headerText} onClick={() => navigate("/")}>
          My Newsletter
        </h1>
      </div>
      <div id={styles.buttonContainer}>
        <button id={styles.subscribeButton}>Subscribe</button>
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
