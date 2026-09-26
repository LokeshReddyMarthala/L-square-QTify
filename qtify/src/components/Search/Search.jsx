import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../assets/search-icon.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

function Search({ searchData = [], placeholder }) {
  const navigate = useNavigate();

  const onSubmit = (value) => {
    if (!value || !value.slug) {
      return;
    }

    navigate(`/album/${value.slug}`);
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Autocomplete
          options={searchData}
          getOptionLabel={(option) => option.title || ""}
          onChange={(event, value) => {
            onSubmit(value);
          }}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              height: "48px",
              backgroundColor: "white",
              borderRadius: "8px",
              paddingRight: "45px !important",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              padding: "12px 16px !important",
              fontSize: "16px",
            },
          }}
          renderOption={(props, option) => {
            const artists = option.songs?.reduce(
              (accumulator, currentValue) => {
                accumulator.push(...currentValue.artists);
                return accumulator;
              },
              []
            );

            return (
              <li {...props} key={option.id}>
                <div>
                  <p className={styles.albumTitle}>
                    {option.title}
                  </p>

                  <p className={styles.albumArtists}>
                    {truncate(artists?.join(", ") || "", 40)}
                  </p>
                </div>
              </li>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              required
            />
          )}
        />

        <button
          className={styles.searchButton}
          type="submit"
        >
          <img
            src={searchIcon}
            alt="Search"
            width="24"
            height="24"
          />
        </button>
      </form>
    </div>
  );
}

export default Search;