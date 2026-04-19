import React, { useContext, useState } from 'react'
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import styles from "./Header.module.css";
import { NavLink, Link } from 'react-router-dom';
import logo from "../../../assets/images/logo1.png";
import logoDark from "../../../assets/images/logoDark.png";
import { ThemeContext } from '../../../context/ThemeContext';
import { useCart } from '../../../context/CartContext';
import { useFav } from '../../../context/FavContext';

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { totalCount } = useCart();
  const { totalFavorites } = useFav();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.parent}>
      <div className={darkMode ? `${styles.header} ${styles.dark}` : styles.header}>
        <div className={styles.logo}>
          <Link to={"/"} onClick={closeMenu}>
            <img src={darkMode ? logoDark : logo} alt="Logo" />
          </Link>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
          <ul>
            <li>
              <NavLink to={"/"} onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ""}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ""}>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to={"/menu"} onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ""}>
                MENU
              </NavLink>
            </li>
            <li>
              <NavLink to={"/sign"} onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ""}>
                SIGN IN
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.rightSide}>
          <Link to="/favourites" className={styles.favBtn}>
            <FaHeart />
            {totalFavorites > 0 && (
              <span className={styles.favCount}>{totalFavorites}</span>
            )}
          </Link>

          <Link to="/cart" className={styles.cartBtn}>
            <FaShoppingCart />
            {totalCount > 0 && <span className={styles.cartCount}>{totalCount}</span>}
          </Link>

          <button
            className={`${styles.toggle} ${darkMode ? styles.activeBtn : ""}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className={styles.circle}></div>
          </button>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerActive : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;