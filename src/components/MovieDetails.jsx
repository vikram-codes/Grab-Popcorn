/* eslint-disable react/prop-types */
import Loader from "./Loader";
import StarRating from "./StarRating";
import React, { useEffect, useState } from "react";

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const movieRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    Released: released,
    imdbRating,
    Director: director,
    Genre: genre,
    Actors: actors,
    Plot: plot,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=6d352d05&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    document.title = `Movie: ${title}`;

    return function () {
      document.title = "Grab Popcorn";
    };
  }, [title, selectedId]);

  useEffect(() => {
    function callback(e) {
      if (e.code === "Escape") {
        onCloseMovie();
      }
    }
    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [onCloseMovie]);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      poster,
      year,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      released,
      genre,
      userRating,
    };
    onAddWatched(newWatchedMovie);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    size="32"
                    maxRating="10"
                    color="orange"
                    className="rating"
                    key={movie.imdbRating}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 ? (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to List
                    </button>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <p>You already rated this movie with {movieRating} ⭐️</p>
              )}
            </div>
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Directed by {movie.Director}</p>
          </section>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
