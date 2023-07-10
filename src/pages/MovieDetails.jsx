import React, { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { useParams } from "react-router-dom";
import {getMovieImg} from '../utils/getMovieImg'
export const MovieDetails = () => {
  const { movieId } = useParams;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    get("/movie/"+movieId).then((data) => {
      setMovie(data);
      console.log(data)
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500)

  return(
    <div>
        <img src={imageUrl} alt={movie.title} />
    </div>
  ) 
};
