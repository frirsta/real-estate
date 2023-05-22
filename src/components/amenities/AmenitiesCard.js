import React from 'react';
import styles from '../../styles/Amenities.module.css';

const AmenitiesCard = ({title, content}) => {
  return (
    <div className={styles.Card}>
      <h2 className={styles.Title}>{title}</h2>
      <p className={styles.Content}>{content}</p>
    </div>
  )
}

export default AmenitiesCard;
