import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/joy/Typography";
import styles from "../styles/Agent.module.css";

const Agent = ({ name, nameTwo, nameThree, img, imgTwo, imgThree }) => {
  return (<>
    <div className={styles.Agent}>
        <div className={styles.AgentTitle}>
        <h2>Real estate agents</h2>
        </div>
        <div className={styles.HorizontalLine}></div>
      <div className={styles.AgentsContainer}>
      <div className={styles.AgentContainer} >
        <Avatar className={styles.Avatar} alt="Remy Sharp" src={img} />
        <Typography className={styles.Name} level="h6">
          {name}
        </Typography>
      </div>
      <div className={styles.AgentContainer} >
        <Avatar className={styles.Avatar} alt="Remy Sharp" src={imgTwo} />
        <Typography className={styles.Name} level="h6">
          {nameTwo}
        </Typography>
      </div>
      <div className={styles.AgentContainer} >
        <Avatar className={styles.Avatar} alt="Remy Sharp" src={imgThree} />
        <Typography className={styles.Name} level="h6">
          {nameThree}
        </Typography>
      </div>
      </div>
    </div>
    </>
  );
};

export default Agent;
