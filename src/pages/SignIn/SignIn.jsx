import React, { useContext, useState } from "react";
import styles from "./SignIn.module.css";
import { ThemeContext } from "../../context/ThemeContext";

function SignIn() {
  const { darkMode } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={darkMode ? `${styles.signInPage} ${styles.dark}` : styles.signInPage}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1 className={styles.title}>Sign In to ChaArt</h1>
          <p className={styles.description}>
            Access your favorite bubble tea experience, explore our menu, and
            stay connected with the sweetest part of your day.
          </p>

          <div className={styles.features}>
            <div className={styles.featureCard}>
              <h3>Premium Drinks</h3>
              <p>Enjoy handcrafted bubble tea made with love and flavor.</p>
            </div>

            <div className={styles.featureCard}>
              <h3>Exclusive Offers</h3>
              <p>Stay updated with special promotions and seasonal drinks.</p>
            </div>

            <div className={styles.featureCard}>
              <h3>Fast Access</h3>
              <p>Quickly explore your account and favorite menu items.</p>
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>Login</h2>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className={styles.showBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className={styles.signInBtn}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;