import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetics">
      <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
        Listen
      </a>

      <h2>/{props.phonetics[0].text}/</h2>
    </div>
  );
}
