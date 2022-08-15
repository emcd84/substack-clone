import React from "react";
import styles from "../styles/SignInContent.module.css";

export default function SignInContent() {
  return (
    <div id={styles.container}>
      <svg
        role='img'
        width='48'
        height='48'
        viewBox='0 0 16 18'
        fill='none'
        strokeWidth='1'
        stroke='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g>
          <title></title>
          <path d='M16 4H0V6H16V4Z' fill='#ff6719'></path>
          <path d='M0 8V18L7.9993 13.534L16 18V8H0Z' fill='#ff6719'></path>
          <path d='M16 0H0V2H16V0Z' fill='#ff6719'></path>
        </g>
      </svg>
      <div id={styles.headerDiv}>
        <h2 id={styles.subheader}>Continue to</h2>
        <h1 id={styles.header}>The Newsletter</h1>
      </div>
      <div id={styles.inputDiv}>
        <input className={styles.input} placeholder='Your Email'></input>
        <input className={styles.input} placeholder='Your Password'></input>
        <button id={styles.signInButton}>Sign in</button>
      </div>
      <div id={styles.signUpFooter}>
        <h3 id={styles.signUpText}>Don't have an account yet? </h3>
        <a id={styles.signUpLink}>Sign Up</a>
      </div>
    </div>
  );
}
