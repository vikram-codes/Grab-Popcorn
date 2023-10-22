import { useState } from "react";

function NavBar({ tempMovieData }) {
  return (
    <>
      <nav className="nav-bar">
        <GrabPopcornLogo />
        <Search />
        <NumResults tempMovieData={tempMovieData} />
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

function NumResults({ tempMovieData }) {
  return (
    <>
      <p className="num-results">
        Found <strong>{tempMovieData.length}</strong> results
      </p>
    </>
  );
  console.log("hehe");
}

export default NavBar;
