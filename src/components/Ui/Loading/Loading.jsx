import React, { useContext } from "react";
import styles from "./Loading.module.css";
import logo from "../../../assets/images/logo1.png";
import logoDark from "../../../assets/images/logoDark.png"
import { ThemeContext } from "../../../context/ThemeContext";

function Loading() {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={darkMode ? `${styles.loaderWrapper} ${styles.dark}` : styles.loaderWrapper}>
      <div className={styles.loaderBox}>
        <img src={darkMode ? logoDark : logo} alt="Loading..." className={styles.logo} />
      </div>
    </div>
  );
}

export default Loading;