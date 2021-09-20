import React from "react";
import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    search();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>
            <i className="fas fa-spell-check"></i> What word would you like to
            look up?
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              id="search-form"
              onChange={handleWordChange}
              defaultValue={props.defaultWord}
            />
            <input
              type="submit"
              id="search-button"
              value="Search"
              className="btn btn-primary"
            />
          </form>
          <span className="suggestions">
            suggested words: science, power, history...
          </span>
        </section>
        <section>
          <Results results={results} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
