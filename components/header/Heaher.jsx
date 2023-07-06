import React from "react"
import styles from "./header.module.css"

const Heaher = (props) => {
  return (
    <div className={styles.header__container}>
      <header>
        <nav className={styles.header__nav}>
          <div className={styles.header__logo}>
            <h4>Sushiman</h4>
            <div className={styles.header__logo__overlay}></div>
          </div>

          <ul className={styles.header__menu}>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#food">Food</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <img src="assets/search.svg" alt="search" />
            </li>
          </ul>

          <ul className={styles.header__menu_mobile}>
            <li>
              <img src="assets/menu.svg" alt="menu" />
            </li>
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </div>
  )
}

export default Heaher
