import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.projectCard}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.projectImage}
      />
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <ul className={styles.projectSkills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.projectLinks}>
          <a href={demo} className={styles.projectLink}>
            Demo
          </a>
          <a href={source} className={styles.projectLink}>
            Source
          </a>
        </div>
      </div>
    </div>
  );
};