/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";

function NavBar({ children }) {
  return (
    <>
      <nav className="nav-bar">
        <GrabPopcornLogo />
        {children}
      </nav>
    </>
  );
}

export function GrabPopcornLogo() {
  return (
    <>
      <div className="logo">
        <span role="img">🍿</span>
        <h1>Grab Popcorn</h1>
      </div>
    </>
  );
}

export function Search({ query, setQuery }) {
  const search = useRef(null);

  useEffect(() => {
    search.current.focus();
    function callback(e) {
      if (document.activeElement === search) return;
      if (e.code === "Enter") {
        search.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, [setQuery]);
  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search movies here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={search}
      />
    </>
  );
}

export function NumResults({ movies }) {
  return (
    <>
      <p className="num-results">
        Found <strong>{movies?.length}</strong> results
      </p>
    </>
  );
}

export default NavBar;
