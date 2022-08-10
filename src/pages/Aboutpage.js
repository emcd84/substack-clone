import { React, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import styles from "../styles/Aboutpage.module.css";

export default function Aboutpage() {
  const [aboutText, setAboutText] = useState("");

  async function getAboutText() {
    const docRef = doc(db, "siteInfo", "About");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setAboutText(docSnap.data().bio);
    } else {
      console.log("error");
    }
  }

  useEffect(() => {
    getAboutText();
  }, []);

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
          {aboutText}
        </p>
      </div>
    </div>
  );
}
