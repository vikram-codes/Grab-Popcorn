/* eslint-disable react/prop-types */
export default function MovieList({ movies }) {
  return (
    <>
      <ul className="list list-movies">
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
