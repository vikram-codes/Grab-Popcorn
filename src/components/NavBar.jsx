function NavBar(props) {
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
          value={props.query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{props.movies.length}</strong> results
        </p>
      </nav>
    </>
  );
}

export default NavBar;
