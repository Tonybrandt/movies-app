import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
export const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <li className="card">
      <Link className="link" to={"/movies/" + movie.id}>
        <img
          className="img-card"
          src={imageUrl}
          alt={movie.title}
          width={300}
          height={450}
        />
        <h2 className="title-card">{movie.title}</h2>
      </Link>
    </li>
  );
};
