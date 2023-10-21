import { useState } from "react";

function ListBox({ tempMovieData }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </button>
        {isOpen1 && <MovieList tempMovieData={tempMovieData} />}
      </div>
    </>
  );
}

function MovieList({ tempMovieData }) {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <ul className="list">
        {movies?.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  );
}

function Movie({ movie }) {
  return (
    <>
      <li>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </li>
    </>
  );
}

export default ListBox;