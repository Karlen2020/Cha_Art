import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { ThemeContext } from "../../context/ThemeContext";

function NotFound() {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={darkMode ? `${styles.page} ${styles.dark}` : styles.page}>
      <div className={styles.box}>
        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>Page Not Found</h2>

        <p className={styles.text}>
          Sorry, the page is not found!
        </p>

        <Link to="/" className={styles.btn}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;