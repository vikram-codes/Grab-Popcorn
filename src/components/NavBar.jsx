import { useState } from "react";

function NavBar({ movies }) {
  return (
    <>
      <nav className="nav-bar">
        <GrabPopcornLogo />
        <Search />
        <NumResults movies={movies} />
      </nav>
    </>
  );
}

function GrabPopcornLogo() {
  return (
    <>
      <div className="logo">
        <span role="img">🍿</span>
        <h1>Grab Popcorn</h1>
      </div>
    </>
  );
}

function Search() {
  const [query, setQuery] = useState("");

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search movies here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}

function NumResults({ movies }) {
  return (
    <>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </>
  );
}

export default NavBar;
