import React from "react";
import SquareFootSharpIcon from "@mui/icons-material/SquareFootSharp";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import styles from '../styles/Address.module.css';

const Address = ({ area, beds, baths }) => {
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <span>Bathrooms</span>
          <div className={styles.HomeDetailsSpan}>
            <SquareFootSharpIcon className={styles.Icon} /> {area}
          </div>
        </div>
        <div className={styles.div2}>
          <span>Bedrooms</span>
          <div className={styles.HomeDetailsSpan}>
            <KingBedOutlinedIcon className={styles.Icon} /> {beds}
          </div>
        </div>
        <div className={styles.div3}>
          <span>Square Area</span>
          <div className={styles.HomeDetailsSpan}>
            <BathtubOutlinedIcon className={styles.Icon} /> {baths}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
