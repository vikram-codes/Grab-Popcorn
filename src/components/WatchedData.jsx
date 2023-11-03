/* eslint-disable react/prop-types */

import { useState } from "react";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// function WatchedData({ children }) {
//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <>
//       <div className="box">
//         <button
//           className="btn-toggle"
//           onClick={() => setIsOpen2((open) => !open)}
//         >
//           {isOpen2 ? "–" : "+"}
//         </button>
//         {isOpen2 && children}
//       </div>
//     </>
//   );
// }

function handleDelete() {}

export function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <>
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>
              {avgImdbRating / 1 === 0
                ? Math.trunc(avgImdbRating)
                : avgImdbRating.toFixed(1)}
            </span>
          </p>
          <p>
            <span>🌟</span>
            <span>
              {avgUserRating / 1 === 0
                ? avgUserRating
                : avgUserRating.toFixed(1)}
            </span>
          </p>
          <p>
            <span>⏳</span>
            <span>
              {avgRuntime / 1 === 0 ? avgRuntime : avgRuntime.toFixed(1)}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export function WatchedMoviesList({ watched }) {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <>
            <WatchedMovie key={movie.imdbID} movie={movie} />
          </>
        ))}
      </ul>
    </>
  );
}

function WatchedMovie({ movie }) {
  return (
    <>
      <li>
        <img src={movie.poster} alt={`${movie.title} poster`} />
        <h3>{movie.title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
        <button className="btn-delete" onClick={handleDelete}>
          X
        </button>
      </li>
    </>
  );
}

// export default WatchedData;
