import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({
  title,
  endpoint,
  type = "grid",
}) {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.error(`Failed to fetch ${title}:`, error);
      }
    };

    fetchData();
  }, [endpoint, title]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button
          className={styles.collapseButton}
          onClick={() => setShowAll((previous) => !previous)}
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.cardGrid}>
          {data.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      ) : (
        <Carousel data={data} />
      )}
    </section>
  );
}

export default Section;