import React from "react";
import styles from "../styles/SignInPage.module.css";
import SignInHeader from "../components/SignInHeader";
import SignInContent from "../components/SignInContent";

export default function SignInPage() {
  return (
    <div id={styles.container}>
      <SignInHeader />
      <SignInContent />
    </div>
  );
}
