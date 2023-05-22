import React from 'react';
import HomeList from '../lists/HomeList';
import { useParams } from 'react-router-dom';
import styles from '../styles/Carousel.module.css';



const PropertyImages = () => {
    const {id} = useParams();
    
  return (
    <div>
       <div className={styles.ProjectDetailsSection}>
        <div className={styles.Container}>
          <img
            src={HomeList[id].src1}
            alt={HomeList[id].alt1}
            key={HomeList[id].alt1}
            className={`${styles.ImageGridRowTwo} ${styles.SpanThree} ${styles.OrderOne}`}
          />
          <img
            src={HomeList[id].src2}
            alt={HomeList[id].alt2}
            key={HomeList[id].alt2}
            className={styles.OrderTwo}
          />
          <img
            src={HomeList[id].src3}
            alt={HomeList[id].alt3}
            key={HomeList[id].alt3}
            className={styles.OrderThree}
          />
          <img
            src={HomeList[id].src4}
            alt={HomeList[id].alt4}
            key={HomeList[id].alt4}
            className={styles.OrderFour}
          />
          <img
            src={HomeList[id].src5}
            alt={HomeList[id].alt5}
            key={HomeList[id].alt5}
            className={styles.OrderFive}
          />
        </div>
        
      </div>
    
    </div>
  )
}

export default PropertyImages
