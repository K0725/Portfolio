import React from "react";
import { TypeAnimation } from 'react-type-animation';
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
        <h1 className={styles.title}>Hi, I'm Koki</h1>
        <TypeAnimation
          sequence={[
            "I'm currently a student at Cal Poly Pomona studying CS. My interest lies in Web Development and Cloud development.",
            1000, // Waits 1s
            "I am currently looking for new grad positions and internships!",
            1000, // Waits 1s
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          style={{ display: 'inline-block' }}
          className={styles.description}
        />
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