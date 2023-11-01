/* eslint-disable react/prop-types */
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
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        <img src={movie.poster} alt={`Poster of ${movie.poster}`} />
        <div className="details">{selectedId}</div>;
      </header>
    </>
  );
}

export default MovieDetails;
