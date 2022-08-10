import { React, useEffect, useState } from "react";
import styles from "../styles/Aboutpage.module.css";

export default function Aboutpage(props) {
  return (
    <div id={styles.container}>
      <div id={styles.menuDiv}>
        <span id={styles.aboutHeader} role='heading' aria-level='1'>
          <p>About</p>
        </span>
      </div>
      <h1 id={styles.header}>What Is This?</h1>
      <div id={styles.textDiv}>
        <p id={styles.bioText} role='paragraph'>
          {props.aboutText}
        </p>
      </div>
    </div>
  );
}
