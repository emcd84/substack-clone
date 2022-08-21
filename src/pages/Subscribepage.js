import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Subscribepage.module.css";

export default function Subscribepage(props) {
  const navigate = useNavigate();

  function onSubscribeClick() {
    props.subscribe();
    navigate("/");
  }

  return (
    <div id={styles.container}>
      <div id={styles.content}>
        <h1 id={styles.header}>What's your email?</h1>
        <div id={styles.inputDiv}>
          <input id={styles.input} placeholder='Type your email...'></input>
          <button id={styles.button} onClick={onSubscribeClick}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
