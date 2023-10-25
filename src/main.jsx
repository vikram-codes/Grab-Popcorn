import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";
// import App from './App.jsx'
// import './index.css'

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating maxRating={5} color="blue" onSetRating={setMovieRating} />
      <p>You have rated {movieRating} star </p>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test />
    <StarRating maxRating={10} color="red" size={48} className="test" />
  </React.StrictMode>
);
