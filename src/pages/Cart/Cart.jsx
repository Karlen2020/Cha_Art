import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { darkMode } = useContext(ThemeContext);
  const {
    cartItems,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  return (
    <section className={darkMode ? `${styles.cart} ${styles.dark}` : styles.cart}>
      <h1 className={styles.title}>CART</h1>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty</p>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.left}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.image} alt={item.name} className={styles.image} />

                <div className={styles.info}>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <p>{item.priceLarge} AMD</p>

                  <div className={styles.controls}>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>

                <div className={styles.rightSide}>
                  <p className={styles.itemTotal}>
                    {item.priceLarge * item.quantity} AMD
                  </p>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h2>Summary</h2>
            <p>Total: {totalPrice} AMD</p>
            <button className={styles.clearBtn} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;