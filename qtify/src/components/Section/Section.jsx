import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({
  title = "Top Albums",
  endpoint,
  type = "grid",
}) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(type === "grid");

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(endpoint);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [endpoint]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button
          className={styles.collapseButton}
          onClick={() => setShowAll((previous) => !previous)}
        >
          {showAll ? "Collapse" : "Show all"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.cardGrid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      ) : (
        <Carousel data={albums} />
      )}
    </section>
  );
}

export default Section;