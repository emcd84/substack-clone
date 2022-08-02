import React from "react";
import styles from "../styles/TopPostPreview.module.css";

export default function TopPostPreview(props) {
  return (
    <div>
      <img
        src='https://substackcdn.com/image/fetch/w_128,c_scale,f_png,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Ficon%2FSubstackIcon%3Fheight%3D128%26fill%3D%2523DDDDDD%26stroke%3D%2523DDDDDD'
        alt='Default post image'
      ></img>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>{props.author}</h3>
      <svg
        viewBox='0 0 24 24'
        height='24'
        width='24'
        strokeWidth='.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'></path>
      </svg>
      <svg
        viewBox='0 0 24 24'
        height='24'
        width='24'
        strokeWidth='.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
      </svg>
      <svg
        viewBox='0 0 24 24'
        height='24'
        width='24'
        strokeWidth='.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8'></path>
        <polyline points='16 6 12 2 8 6'></polyline>
        <line x1='12' y1='2' x2='12' y2='15'></line>
      </svg>
    </div>
  );
}
