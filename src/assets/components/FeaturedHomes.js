import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import styles from "../styles/FeaturedHome.module.css";
import CardContent from "@mui/joy/CardContent";
import apartment from "../assets/featuredHomes/apartment.jpg";
import apartment_two from "../assets/featuredHomes/apartment_two.jpg";
import apartment_three from "../assets/featuredHomes/apartment_three.jpg";
import apartment_four from "../assets/featuredHomes/apartment_four.jpg";

const FeaturedHomes = () => {
  return (
    <div>
      <div className={styles.FeaturedHome}>
        <Card
          className={`${styles.FeaturedHomeCard} ${styles.FeaturedHomeContainer600}`}
        >
          <CardContent className={styles.CardContent}>
            <Typography level="h2" fontSize="lg" textColor="#000" m={3}>
              <div className={styles.FeaturedHomeTitleContainer}>
                <div className={styles.FeaturedHomeTitle}>
                  <span className={styles.PropertyName}>Home</span>
                  <span className={styles.NowSelling}>Now Selling</span>
                </div>
              </div>
            </Typography>
          </CardContent>
          <Box sx={{ position: "relative" }}>
            <div>
              <figure>
                <img
                  className={styles.ProperyImage}
                  src={apartment}
                  loading="lazy"
                  alt="Yosemite by Casey Horner"
                />
              </figure>
            </div>
            <CardCover
              className={`gradient-cover ${styles.CardCover}`}
              sx={{
                "&:hover, &:focus-within": {
                  opacity: 1,
                },
                opacity: 0,
                transition: "0.1s ease-in",
                background:
                  "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
              }}
            >
              <Box>
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    flexGrow: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <Typography className={styles.LearnMoreContainer}>
                    <Link className={styles.LearnMore}>Learn more</Link>
                  </Typography>
                </Box>
              </Box>
            </CardCover>
          </Box>
        </Card>
        <Card
          className={`${styles.FeaturedHomeCard} ${styles.FeaturedHomeContainer400}`}
        >
          <CardContent className={styles.CardContent}>
            <Typography level="h2" fontSize="lg" textColor="#000" m={3}>
              <div className={styles.FeaturedHomeTitleContainer}>
                <div className={styles.FeaturedHomeTitle}>
                  <span className={styles.PropertyName}>Home</span>
                  <span className={styles.NowSelling}>Now Selling</span>
                </div>
              </div>
            </Typography>
          </CardContent>
          <Box sx={{ position: "relative" }}>
            <div>
              <figure>
                <img
                  className={styles.ProperyImage}
                  src={apartment_two}
                  loading="lazy"
                  alt="Yosemite by Casey Horner"
                />
              </figure>
            </div>
            <CardCover
              className={`gradient-cover ${styles.CardCover}`}
              sx={{
                "&:hover, &:focus-within": {
                  opacity: 1,
                },
                opacity: 0,
                transition: "0.1s ease-in",
                background:
                  "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
              }}
            >
              <Box>
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    flexGrow: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <Typography className={styles.LearnMoreContainer}>
                    <Link className={styles.LearnMore}>Learn more</Link>
                  </Typography>
                </Box>
              </Box>
            </CardCover>
          </Box>
        </Card>
      </div>
      <div className={styles.FeaturedHome}>
        <Card
          className={`${styles.FeaturedHomeCard} ${styles.FeaturedHomeContainer400}`}
        >
          <CardContent className={styles.CardContent}>
            <Typography level="h2" fontSize="lg" textColor="#000" m={3}>
              <div className={styles.FeaturedHomeTitleContainer}>
                <div className={styles.FeaturedHomeTitle}>
                  <span className={styles.PropertyName}>Home</span>
                  <span className={styles.NowSelling}>Now Selling</span>
                </div>
              </div>
            </Typography>
          </CardContent>
          <Box  sx={{ position: "relative" }}>
            <div>
              <figure>
                <img
                  className={styles.ProperyImage}
                  src={apartment_three}
                  loading="lazy"
                  alt="Yosemite by Casey Horner"
                />
              </figure>
              </div>
            <CardCover
              className={`gradient-cover ${styles.CardCover}`}
              sx={{
                "&:hover, &:focus-within": {
                  opacity: 1,
                },
                opacity: 0,
                transition: "0.1s ease-in",
                background:
                  "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
              }}
            >
              <Box>
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    flexGrow: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <Typography className={styles.LearnMoreContainer}>
                    <Link className={styles.LearnMore}>Learn more</Link>
                  </Typography>
                </Box>
              </Box>
            </CardCover>
          </Box>
        </Card>
        <Card
          className={`${styles.FeaturedHomeCard} ${styles.FeaturedHomeContainer600}`}
        >
          <CardContent className={styles.CardContent}>
            <Typography level="h2" fontSize="lg" textColor="#000" m={3}>
              <div className={styles.FeaturedHomeTitleContainer}>
                <div className={styles.FeaturedHomeTitle}>
                  <span className={styles.PropertyName}>Home</span>
                  <span className={styles.NowSelling}>Now Selling</span>
                </div>
              </div>
            </Typography>
          </CardContent>
          <Box sx={{ position: "relative" }}>
            <div>
              <figure>
                <img
                  className={styles.ProperyImage}
                  src={apartment_four}
                  loading="lazy"
                  alt="Yosemite by Casey Horner"
                />
              </figure>
            </div>
            <CardCover
              className={`gradient-cover ${styles.CardCover}`}
              sx={{
                "&:hover, &:focus-within": {
                  opacity: 1,
                },
                opacity: 0,
                transition: "0.1s ease-in",
                background:
                  "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
              }}
            >
              <Box>
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    flexGrow: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <Typography className={styles.LearnMoreContainer}>
                    <Link className={styles.LearnMore}>Learn more</Link>
                  </Typography>
                </Box>
              </Box>
            </CardCover>
          </Box>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedHomes;
