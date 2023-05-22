import React from "react";
import FeaturedHomes from "../components/FeaturedHomes";
import styles from "../styles/Home.module.css";
import style from "../App.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <div className={styles.HeroContainer}>
          <div className={styles.Hero}></div>
          <h1 className={style.Brand}>Regal Residences</h1>
          <div className={style.Title}>
            <h2 className={style.Title}>
              At the heart of Stockholm, we are creating the most luxurious
              homes
            </h2>
            <Link to={"/about"} className={`${style.Button} btn btn-primary`}>
              Learn more
            </Link>
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
