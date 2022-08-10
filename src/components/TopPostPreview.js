import { React } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/TopPostPreview.module.css";

export default function TopPostPreview(props) {
  return (
    <Link id={styles.link} to={`posts/${props.post.id}`}>
      <div id={styles.container}>
        <div id={styles.left}>
          <div id={styles.postImgEmpty}></div>
        </div>
        <div id={styles.right}>
          <h1 id={styles.titleText}>{props.post.title}</h1>
          <h2 id={styles.subtitleText}>{props.post.subtitle}</h2>
          <div id={styles.authorAndImages}>
            <h3 id={styles.authorText}>{props.post.author}</h3>
            <svg
              className={styles.icon}
              viewBox='0 0 24 24'
              height='16'
              width='16'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className={styles.iconPath}
                d='M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'
              ></path>
            </svg>
            <svg
              className={styles.icon}
              viewBox='0 0 24 24'
              height='16'
              width='16'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className={styles.iconPath}
                d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'
              ></path>
            </svg>
            <svg
              className={styles.icon}
              viewBox='0 0 24 24'
              height='16'
              width='16'
              strokeWidth='1.5'
              fill='#000000'
              stroke='000'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className={styles.iconPath}
                d='M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8'
              ></path>
              <polyline
                className={styles.iconPath}
                points='16 6 12 2 8 6'
              ></polyline>
              <line
                className={styles.iconPath}
                x1='12'
                y1='2'
                x2='12'
                y2='15'
              ></line>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
