import React, { useContext } from "react";
import styles from "./Footer.module.css";
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaInstagram } from "react-icons/fa";
import { ThemeContext } from "../../../context/ThemeContext";

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <footer className={darkMode ? `${styles.footer} ${styles.dark}` : styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>ChaArt</h2>
          <p>Authentic Chinese Boba Tea</p>
        </div>
        <div className={styles.contact}>
          <h3>Contacts</h3>
          <p><FaMapMarkerAlt className={styles.icon} /> Baghramyan Avenue 19/1</p>
          <p><FaClock className={styles.icon} /> Open daily 9am - 9:30pm</p>
          <p>
            <FaInstagram className={styles.icon} />
            <a href="https://www.instagram.com/chaart_yerevan" target="_blank" rel="noopener noreferrer" className={styles.instagram}>
              @chaart_yerevan
            </a>
          </p>
          <p><FaEnvelope className={styles.icon} /> chaart@mail.com</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2026 ChaArt. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;