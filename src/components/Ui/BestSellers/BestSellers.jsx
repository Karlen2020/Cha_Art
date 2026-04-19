import React, { useContext } from "react";
import styles from "./BestSellers.module.css";
import drink1 from "../../../assets/images/drink1.jpg";
import drink2 from "../../../assets/images/drink2.png";
import drink3 from "../../../assets/images/drink3.jpg";
import { ThemeContext } from "../../../context/ThemeContext";

function BestSellers() {
  const { darkMode } = useContext(ThemeContext)
  const products = [
    {
      "id": 1,
      "name": "Floating Clouds",
      "price": 1850,
      "image": drink1
    },
    {
      "id": 2,
      "name": "Pompidou Pink",
      "price": 1850,
      "image": drink2
    },
    {
      "id": 3,
      "name": "Classic Boba Milk Tea",
      "price": 2050,
      "image": drink3
    }
  ];

  return (
    <section className={darkMode ? `${styles.bestSellersSection} ${styles.dark}` : styles.bestSellersSection}>
      <div className={styles.top}>
        <p className={styles.subTitle}>MOST LOVED DRINKS</p>
        <h2 className={styles.title}>Best Sellers</h2>
      </div>

      <div className={styles.cards}>
        {products.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.card} ${index === 1 ? styles.middleCard : ""}`}
          >
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.name} className={styles.image} />
            </div>

            <div className={styles.info}>
              <h3>{item.name}</h3>
              <p>{item.price} AMD</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;