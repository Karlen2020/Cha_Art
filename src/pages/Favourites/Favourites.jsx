import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useFav } from "../../context/FavContext";
import styles from "./Favourites.module.css";

function Favourites() {
  const { darkMode } = useContext(ThemeContext);
  const { favorites, removeFromFavorites, clearFavorites } = useFav();

  return (
    <section className={darkMode ? `${styles.favourites} ${styles.dark}` : styles.favourites}>
      <h1 className={styles.title}>FAVOURITES</h1>

      {favorites.length === 0 ? (
        <div className={styles.emptyBox}>
          <p className={styles.empty}>No favourite drinks yet</p>
        </div>
      ) : (
        <>
          <div className={styles.topBar}>
            <p className={styles.count}>Total: {favorites.length}</p>
            <button className={styles.clearBtn} onClick={clearFavorites}>
              Clear All
            </button>
          </div>

          <div className={styles.grid}>
            {favorites.map((item) => (
              <div key={item.id} className={styles.card}>
                <Link to={`/menu/${item.id}`} className={styles.cardLink}>
                  <div className={styles.imageBox}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                    <p className={styles.cardCategory}>{item.category}</p>
                    <p className={styles.cardPrice}>
                      {item.priceSmall} / {item.priceLarge} AMD
                    </p>
                  </div>
                </Link>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromFavorites(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Favourites;