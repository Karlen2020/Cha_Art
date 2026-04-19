import React, { useContext } from "react";
import styles from "./AboutUs.module.css";

import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import { ThemeContext } from "../../context/ThemeContext";

function AboutUs() {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={darkMode ? `${styles.about} ${styles.dark}` : styles.about}>
      <div className={styles.top}>
        <p className={styles.subTitle}>OUR STORY</p>
        <h1 className={styles.title}>About ChaArt</h1>
      </div>

      <section className={styles.row}>
        <div className={styles.imageBox}>
          <img src={about1} alt="ChaArt Cafe" className={styles.image} />
        </div>

        <div className={styles.textBox}>
          <h2>Authentic Taste & Modern Vibes</h2>
          <p>
            At ChaArt, we bring together the authentic taste of bubble tea and
            the modern café atmosphere people love. Every drink is made with
            care, premium ingredients, and a passion for unforgettable flavor.
          </p>
        </div>
      </section>

      <section className={styles.row}>
        <div className={styles.textBox}>
          <h2>Made for Every Bubble Tea Lover</h2>
          <p>
            Whether you love classic milk tea, fruity refreshers, or something
            new and exciting, ChaArt is here to give you drinks that look
            beautiful and taste even better.
          </p>
        </div>

        <div className={styles.imageBox}>
          <img src={about2} alt="ChaArt Drinks" className={styles.image} />
        </div>
      </section>

      <section className={styles.row}>
        <div className={styles.imageBox}>
          <iframe className={styles.image} src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa051194e380c0a173e9e160d2adc85e1fa020d7f4376b317e919dd1f2f78b46f&amp;source=constructor" width="500" height="400" frameborder="0" title="ChaArt"></iframe>
        </div>

        <div className={styles.textBox}>
          <h2>Visit Our Location</h2>
          <p>
            Located in a welcoming and stylish atmosphere, ChaArt is the perfect spot
            to enjoy premium bubble tea and relaxing moments. Whether you're coming
            for a quick drink or staying to enjoy the vibe, our café offers a space
            where taste and comfort meet beautifully.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;