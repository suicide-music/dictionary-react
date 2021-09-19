import React from "react";
import "./Dictionary.css";
import { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word} definition`);
  }

  function handleWordChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
