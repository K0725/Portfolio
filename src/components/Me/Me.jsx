import React from "react";
import styles from "./Me.module.css";
import { getImageUrl } from "../../utils";
import { useNavigate } from 'react-router-dom';

const Me = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/ContactForm');
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Koki </h1>
        <p className={styles.description}>
          I'm a currently a student at Cal Poly Pomona studying CS. My interest liesm in Web Development and Data Science. I am actively lookiong for Summer & Fall Software Engineering internship for 2024! 
        </p>
        <button onClick={handleContactClick} className={styles.contactBtn}>
          Contact Me
        </button>
      </div>
      <img
        src={getImageUrl("Me/mee.png")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Me;
