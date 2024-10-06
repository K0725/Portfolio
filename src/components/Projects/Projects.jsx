import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + projects.length) % projects.length);
  };
  
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.carousel}>
        <button onClick={prevSlide} className={styles.carouselButton}>
          &lt;
        </button>
        <div 
          className={styles.carouselContent}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className={styles.carouselItem}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className={styles.carouselButton}>
          &gt;
        </button>
      </div>
    </section>
  );
};