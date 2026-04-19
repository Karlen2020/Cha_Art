import React, { useContext } from "react";
import styles from "./Error.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

function Error({ message }) {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={darkMode ? `${styles.wrapper} ${styles.dark}` : styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.icon}>!</div>
        <h2 className={styles.title}>Something went wrong</h2>
        <p className={styles.text}>{message}</p>
        <button
          className={styles.btn}
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Error;