/* eslint-disable react/prop-types */
import React from "react";

function ErrorMessage({ message }) {
  return (
    <div className="error">
      <span>❌ </span>
      {message}
    </div>
  );
}

export default ErrorMessage;
