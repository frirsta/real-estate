import React from "react";
import FeaturedHomes from "../components/FeaturedHomes";
import styles from '../styles/Home.module.css'


const Home = () => {
  return (
    <div>
      <div>
      <div className={styles.HeroContainer}>
        <div className={styles.Hero}></div>
     
        <div className={styles.HeroTitle}>
          <h2 className={styles.HeroTitle}>
          At the heart of Stockholm, we are creating the most luxurious homes
          </h2>
         
        </div>
      
    </div>
  

      </div>
     <h2 className={styles.FeaturedHomes}>Featured Homes</h2>
     <div className={styles.FeaturedHomeSection}>
     <FeaturedHomes />
    </div>
    </div>
  );
};

export default Home;