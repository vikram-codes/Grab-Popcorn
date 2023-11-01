/* eslint-disable react/prop-types */
import StarRating from "./StarRating";
import React, { useEffect, useState } from "react";

function MovieDetails({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function getMovieDetails() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=6d352d05&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
    }
    getMovieDetails();
  }, []);

  return (
    <>
      <div className="details">
        <header>
          <button className="btn-back" onClick={onCloseMovie}>
            &larr;
          </button>
          <img src={movie.Poster} alt={`Poster of ${movie}`} />
          <div className="details-overview">
            <h2>{movie.Title}</h2>
            <p>
              {movie.Released} &bull; {movie.Runtime}
            </p>
            <p>{movie.Genre}</p>
            <p>
              <span>🌟</span>
              {movie.imdbRating} Imdb Rating
            </p>
          </div>
        </header>
        <section>
          <StarRating
            size="32"
            maxRating="10"
            color="orange"
            className="rating"
          />
          <p>
            <em>{movie.Plot}</em>
          </p>
          <p>Starring {movie.Actors}</p>
          <p>Directed by {movie.Director}</p>
        </section>
      </div>
    </>
  );
}

export default MovieDetails;
