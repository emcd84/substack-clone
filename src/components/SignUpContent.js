import { React, useState } from "react";
import styles from "../styles/SignInContent.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignUpContent() {
  const [signUpFail, setSignUpFail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function trackEmail(e) {
    setEmail(e.target.value);
  }

  function trackPassword(e) {
    setPassword(e.target.value);
  }

  function createAccount() {
    let validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validPasswordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (email.match(validEmailRegex) && password.match(validPasswordRegex)) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/home");
        })
        .catch((error) => {
          alert(`Sign up failed: ${error.code} -- ${error.message}`);
        });
    } else {
      setSignUpFail(true);
    }
  }

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
        <input
          className={styles.input}
          placeholder='Your Email'
          onChange={trackEmail}
        ></input>
        <input
          className={styles.input}
          type='password'
          placeholder='Your Password'
          onChange={trackPassword}
        ></input>
        {signUpFail && (
          <h3 id={styles.failedText}>
            Please enter a valid email address and password
          </h3>
        )}
        <button id={styles.signInButton} onClick={createAccount}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
