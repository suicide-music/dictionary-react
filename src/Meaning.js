import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>{definition.definition}</li>
              <p>
                <em>{definition.example}</em>
              </p>
              <p>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
