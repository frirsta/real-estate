import React from "react";
import styles from "../styles/Amenities.module.css";
import AmenitiesCard from "../components/amenities/AmenitiesCard";
import Hero from "../components/Hero";
import heroImage from "../assets/amenities/hero.jpg";

const Amenities = () => {
  return (
    <div>
      <div>
        <Hero src={heroImage} text={"Amenities"} />
      </div>
      <div className={styles.About}>
        <div className={styles.AboutContentContainer}>
          <h3>Lifestyle</h3>
          <h4 className={styles.CompanyName}>Regal Residences</h4>
          <p className={styles.AmenitiesContent}>
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
      <div className={styles.PoolImage}></div>
      <div>
        <div className={styles.PoolCard}>
          <AmenitiesCard
            title={"PRIVATE POOL"}
            content={
              "Lorem ipsum dolor sit amet. Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            }
          />
        </div>
      </div>
      <div className={styles.GymImage}></div>
      <div>
        <div className={styles.GymCard}>
          <AmenitiesCard
            title={"GYM"}
            content={
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
