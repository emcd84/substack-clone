import React from "react";
import styles from "../styles/TopBar.module.css";
import NewsletterHeader from "./NewsletterHeader";
import MenuBar from "./MenuBar";
import { Outlet } from "react-router-dom";

export default function TopBar(props) {
  if (props.mode === "main") {
    return (
      <div id={styles.container}>
        <div>
          <NewsletterHeader
            loggedIn={props.loggedIn}
            subscribed={props.subscribed}
          />
          <MenuBar />
        </div>
        <Outlet />
      </div>
    );
  } else if (props.mode === "post") {
    return (
      <div id={styles.container}>
        <NewsletterHeader
          loggedIn={props.loggedIn}
          subscribed={props.subscribed}
        />
        <Outlet />
      </div>
    );
  }
}
