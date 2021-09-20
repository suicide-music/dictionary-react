import React from "react";
import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>
          <i className="fas fa-spell-check"></i> What word would you like to
          look up?
        </h2>
        <form onSubmit={search}>
          <input type="search" id="search-form" onChange={handleWordChange} />
          <input
            type="submit"
            id="search-button"
            value="Search"
            className="btn btn-primary"
          />
        </form>
        <span>suggested words: science, power, history... </span>
      </section>
      <section>
        <Results results={results} />
      </section>
    </div>
  );
}
