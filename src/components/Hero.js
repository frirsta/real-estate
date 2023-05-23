import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = ({ src, text }) => {
  return (
    <div className={styles.HeroContainer}>
      <img src={src} alt="Hero" className={styles.Hero} />
      <div className={styles.Title}>
        <h2 className={styles.Title}>{text}</h2>
      </div>
    </div>
  );
};

export default Hero;
