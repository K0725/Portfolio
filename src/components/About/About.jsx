import React from "react";
import { TypeAnimation } from 'react-type-animation';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("Me/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Developer</h3>
              <TypeAnimation
                sequence={[
                  'I have experience and interest in AWS cloud services.',
                  1000, // Waits 1s
                  'In the past, I\'ve worked on projects that involve serverless architecture.',
                  1000, // Waits 1s
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("Me/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <TypeAnimation
                sequence={[
                  'I have experience developing fast and optimized back-end systems and APIs with node.js and Django.',
                  4000, // Waits 1s
                  'Currently learning Go to enhance my skills and knowledge.',
                  4000, // Waits 1s
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};