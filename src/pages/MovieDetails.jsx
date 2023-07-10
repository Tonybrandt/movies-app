import React, { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { useParams } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import "./movieDetail.css";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenres(data.genres[0].name);
      console.log(data.genres[0].name);
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 300);

  return (
    <div className="detailsContainer">
      <section className="container__card">
        <img className="img-card" src={imageUrl} alt={movie.title} />
        <div className="texts">
          <h1 className="title">{movie.title}</h1>
          <p className="copy">
            <strong>Overview: </strong>
            {movie.overview}
          </p>
          <br />
          <p className="copy">
            <strong>Genres: </strong>
            {genres}
          </p>
          <br />
          <button className="watch">Play <span className="emoji">▶️</span></button>
        </div>
      </section>
    </div>
  );
};
