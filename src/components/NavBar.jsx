import { useState } from "react";

function NavBar({ movies }) {
  const [query, setQuery] = useState("");

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>Grab Popcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
    </>
  );
}

export default NavBar;
