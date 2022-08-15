import React from "react";
import styles from "../styles/SignInPage.module.css";
import SignUpHeader from "../components/SignUpHeader";
import SignUpContent from "../components/SignUpContent";

export default function SignUpPage() {
  return (
    <div id={styles.container}>
      <SignUpHeader />
      <SignUpContent />
    </div>
  );
}
