import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({
  image,
  follows,
  likes,
  title,
  isSong = false,
  artists = [],
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.bottomSection}>
        <Chip
          label={`${isSong ? likes : follows} ${
            isSong ? "Likes" : "Follows"
          }`}
          size="small"
          className={styles.chip}
        />
      </div>

      <p className={styles.title}>{title}</p>

      {isSong && artists?.length > 0 && (
        <p className={styles.artists}>{artists.join(", ")}</p>
      )}
    </div>
  );
}

export default Card;