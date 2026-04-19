import React, { useContext } from "react";
import styles from "./Home.module.css";
import HeroSlider from "../../components/Ui/HeroSlider/HeroSlider";
import BestSellers from "../../components/Ui/BestSellers/BestSellers";
import { ThemeContext } from "../../context/ThemeContext";

function Home() {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={darkMode ? `${styles.home} ${styles.dark}` : styles.home}>
      <section className={styles.heroSection}>
        <div className={styles.heroTop}>
          <p className={styles.subTitle}>FRESH BUBBLE TEA EXPERIENCE</p>
          <h1 className={styles.title}>Welcome to ChaArt</h1>
        </div>
        <HeroSlider />
      </section>
      <section>
        <BestSellers></BestSellers>
      </section>
    </div>
  );
}

export default Home;