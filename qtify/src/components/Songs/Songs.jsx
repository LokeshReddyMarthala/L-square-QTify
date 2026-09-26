import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Carousel from "../Carousel/Carousel";
import styles from "./Songs.module.css";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/songs"
        );
        setSongs(response.data);
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      }
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/genres"
        );
        setGenres(response.data.data);
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre?.key === selectedGenre);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Songs</h2>
      </div>

      <Tabs
        value={selectedGenre}
        onChange={(event, newValue) => setSelectedGenre(newValue)}
        className={styles.tabs}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#34c759",
          },
        }}
      >
        <Tab label="All" value="all" className={styles.tab} />

        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
            className={styles.tab}
          />
        ))}
      </Tabs>

      <Carousel data={filteredSongs} isSong={true} />
    </section>
  );
}

export default Songs;