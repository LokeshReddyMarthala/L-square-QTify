import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, follows, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />
      </div>

      <div className={styles.bottomSection}>
        <Chip
          label={`${follows} Follows`}
          size="small"
          className={styles.chip}
        />
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;