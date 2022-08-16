import { React, useState } from "react";
import styles from "../styles/ProfileIcon.module.css";
import { getAuth, signOut } from "firebase/auth";

export default function ProfileIcon() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuOpen() {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  function logOut() {
    const auth = getAuth();
    signOut(auth);
  }

  return (
    <div id={styles.container} onClick={() => toggleMenuOpen()}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        id={styles.icon}
      >
        <line x1='4' y1='12' x2='20' y2='12'></line>
        <line x1='4' y1='6' x2='20' y2='6'></line>
        <line x1='4' y1='18' x2='20' y2='18'></line>
      </svg>
      <img
        id={styles.img}
        src='https://substackcdn.com/image/fetch/w_80,h_80,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Favatars%2Forange.png'
      ></img>
      {menuOpen && (
        <div id={styles.dropDownMenu}>
          <h1 className={styles.dropDownOption} onClick={logOut}>
            Sign Out
          </h1>
        </div>
      )}
    </div>
  );
}
