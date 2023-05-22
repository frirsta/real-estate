import React from "react";
import styles from "../styles/Location.module.css";
import Hero from "../components/Hero";
import PinkHero from "../assets/loaction/pinkHero.jpg";

const Location = () => {
  return (
    <div>
      <Hero src={PinkHero} text={"Location"} />

      <div className={styles.About}>
        <div className={styles.AboutContentContainer}>
          <h3>Location</h3>
          <h4 className={styles.CompanyName}>Regal Residences</h4>
          <p className={styles.AboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={styles.AboutImage}></div>
      </div>
      <div className={styles.Map}></div>
    </div>
  );
};

export default Location;
