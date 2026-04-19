import React, { useContext, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Ui/Loading/Loading";
import Error from "../../components/Ui/Error/Error";
import styles from "./ProductDetails.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { useFav } from "../../context/FavContext";

function ProductDetails() {
  const { darkMode } = useContext(ThemeContext);
  const { addToCart } = useCart();
  const { toggleFavorite, isInFavorites } = useFav();
  const { id } = useParams();

  const { data: product, loading, error } = useFetch(
    `http://localhost:3001/products/${id}`
  );

  const [showComments, setShowComments] = useState(false);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const isFavorite = isInFavorites(product.id);

  return (
    <section className={darkMode ? `${styles.details} ${styles.dark}` : styles.details}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>{product.name}</h1>

          <p className={styles.category}>
            {product.category
              .replaceAll("-", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </p>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.prices}>
            <p>
              <span>Small:</span> {product.priceSmall} AMD
            </p>
            <p>
              <span>Large:</span> {product.priceLarge} AMD
            </p>
          </div>

          <div className={styles.buttons}>
            <Link to="/menu" className={styles.backBtn}>
              Back
            </Link>

            <button
              className={styles.addBtn}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

            <button
              className={styles.favBtn}
              onClick={() => toggleFavorite(product)}
            >
              {isFavorite ? "Remove Favourite" : "Add to Favourites"}
            </button>

            <Link
              to="comments"
              className={styles.commentBtn}
              onClick={() => setShowComments(!showComments)}
            >
              {showComments ? "Hide Comments" : "Comments"}
            </Link>
          </div>
        </div>
      </div>

      {showComments && (
        <div className={styles.commentsBox}>
          <Outlet />
        </div>
      )}
    </section>
  );
}

export default ProductDetails;