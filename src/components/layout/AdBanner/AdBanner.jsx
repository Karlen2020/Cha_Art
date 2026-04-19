import React, { useContext, useEffect, useState } from "react";
import styles from "./AdBanner.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

function AdBanner() {
  const { darkMode } = useContext(ThemeContext)
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={darkMode ? `${styles.banner} ${styles.dark}` : styles.banner}>
      <button
        className={styles.close}
        onClick={() => setVisible(false)}
      >
        ✖
      </button>

      <h2>First Order Discount</h2>
      <p>Get 20% OFF on your first order!</p>

      <Link className={styles.btn} to="/menu" onClick={() => setVisible(false)}>Order Now</Link>
    </div>
  );
}

export default AdBanner;