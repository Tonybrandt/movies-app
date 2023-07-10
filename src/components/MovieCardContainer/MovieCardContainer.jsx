import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { get } from "../../data/httpClient";
import "./movieCardContainer.css";

export const MovieCardContainer = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      // console.log(data);
    });
  }, []);

  return (
    <ul className="card_container">
      {movies.map((movie) => (
        <MovieCard key={movie.id}  movie={movie} />
      ))}
    </ul>
  );
};
