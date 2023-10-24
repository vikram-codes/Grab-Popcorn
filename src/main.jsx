import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating maxRating={5} />
  </React.StrictMode>
);
