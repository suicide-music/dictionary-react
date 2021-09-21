import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>Dictionary App </h1>
      <Dictionary defaultWord="blossom" />
      <footer>
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/viktorija-koluzajeva/"
          target="_blank"
          rel="noreferrer"
        >
          Viktorija Koluzajeva
        </a>
        <br />
        <a
          href="https://github.com/suicide-music"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
