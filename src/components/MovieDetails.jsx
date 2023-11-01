/* eslint-disable react/prop-types */
import React from "react";

function MovieDetails({ selectedId, onCloseMovie }) {
  return (
    <>
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      <div className="details">{selectedId}</div>;
    </>
  );
}

export default MovieDetails;
