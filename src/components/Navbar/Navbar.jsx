import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Koki Yamaguchi
      </a>
      <div className={styles.menu}>
        
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact Info</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/e/2PACX-1vSbvMqMH_4PSF6jtuEr_39IScqjGnKMrjbIi3GnJF4KT0vN1TF1ee4NrQmt7pr1DDd5wutqoHNqIQYN/pub">My Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};