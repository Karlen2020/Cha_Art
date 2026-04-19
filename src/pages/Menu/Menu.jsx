import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// import useFetch from "../../hooks/useFetch";
import styles from "./Menu.module.css";
// import Loading from "../../components/Ui/Loading/Loading";
// import Error from "../../components/Ui/Error/Error";
import { ThemeContext } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { useFav } from "../../context/FavContext";
import products from "../../data/products";

function Menu() {
  const { darkMode } = useContext(ThemeContext);
  const { addToCart } = useCart();
  const { toggleFavorite, isInFavorites } = useFav();
  // const { data: products, loading, error } = useFetch("http://localhost:3001/products");

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // if (loading) return <Loading />;
  // if (error) return <Error message={error} />;

  const categories = ["all"];

  for (let item of products) {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  }

  const filteredProducts = products.filter((item) => {
    const bySearch = item.name.toLowerCase().includes(search.toLowerCase());
    const byCategory =
      activeCategory === "all" || item.category === activeCategory;

    return bySearch && byCategory;
  });

  return (
    <section className={darkMode ? `${styles.menu} ${styles.dark}` : styles.menu}>
      <h1 className={styles.title}>MENU</h1>

      <input
        type="text"
        placeholder="Search drink..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
      />

      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? `${styles.categoryBtn} ${styles.activeBtn}`
                : styles.categoryBtn
            }
          >
            {category
              .replaceAll("-", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className={styles.card}>
              <button
                className={styles.favBtn}
                onClick={() => toggleFavorite(item)}
              >
                {isInFavorites(item.id) ? <FaHeart /> : <FaRegHeart />}
              </button>

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
                className={styles.addBtn}
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
          ))
        ) : (
          <p className={styles.notFound}>Not Found</p>
        )}
      </div>
    </section>
  );
}

export default Menu;