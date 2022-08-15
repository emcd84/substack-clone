import React from "react";
import styles from "../styles/SignInHeader.module.css";

export default function SignUpHeader() {
  return (
    <div id={styles.container}>
      <div id={styles.left}>
        <div id={styles.iconDiv}>
          <svg
            role='img'
            width='7.2'
            height='12'
            viewBox='0 0 12 20'
            fill='none'
            strokeWidth='1'
            stroke='#000'
            xmlns='http://www.w3.org/2000/svg'
            id={styles.icon}
          >
            <g>
              <title></title>
              <path
                d='M11 19L1 10L11 1'
                stroke='#1C110B'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                id={styles.iconPath}
              ></path>
            </g>
          </svg>
        </div>
        <img
          id={styles.logo}
          src='https://substackcdn.com/image/fetch/w_56,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack-nomargin.png'
          alt='Substack Logo'
        ></img>
      </div>
      <h1 id={styles.text}>Sign up</h1>
    </div>
  );
}
