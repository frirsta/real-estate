import React from "react";
import HomeList from "../../lists/HomeList";
import { Link } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardOverflow from '@mui/joy/CardOverflow';
import styles from '../../styles/Property.module.css';
import HeroImage from '../../assets/properties/hero.jpg';
import Hero from '../../components/Hero';


const Property = () => {
  return (
    <div>
      <Hero src={HeroImage} text={'Properties'} />
    <div className={styles.PropertyContainer}>
      {HomeList.map((item) => {
        return (
          <div className={styles.CardContainer} key={item.address}>

            <Card className={styles.PropertyCard} variant="outlined">
      <CardOverflow>
        <AspectRatio className={styles.AspectRatio} ratio="1">
          <img className={styles.Image}
            src={item.src1}
           
            loading="lazy"
            alt={item.alt1}
          />
        </AspectRatio>
      </CardOverflow>
     
      <CardOverflow className={styles.PropertyInformation}
        variant="soft"
        sx={{
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
        }}
      > <Typography className={styles.Name} level="h2" sx={{ fontSize: 'md', mt: 2 }}>
      {item.name}
      </Typography>
      <Typography className={styles.Details} level="body2" sx={{ mt: 0.5, mb: 2 }}>
      {item.shortDetails}
      </Typography>
              <Typography className={styles.Address} level="body2" sx={{ mt: 0.5, mb: 2 }}>
      {item.address}
      </Typography>
      <Typography className={styles.Price} level="body2" sx={{ mt: 0.5, mb: 2 }}>
      {item.startingPrice}
      </Typography>
            
    
                 <Link className={styles.LearnMore} to={`/property/${item.id}`}>Learn more</Link>
      </CardOverflow>
    </Card>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Property;
