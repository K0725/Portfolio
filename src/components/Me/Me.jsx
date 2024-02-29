import React from "react";

import styles from "./Me.module.css";

import { getImageUrl } from "../../utils";

export const Me = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Koki </h1>
        <p className={styles.description}>
          I'm a full-stack developer with interest in Backend Development!
        </p>
        <a href="mailto: kokiyama077@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("Me/mee.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};