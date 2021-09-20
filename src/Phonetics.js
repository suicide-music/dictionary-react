import React from "react";

export default function Phonetics(props) {
  console.log(props);

  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <h2>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            <i class="fas fa-volume-up"></i>
          </a>{" "}
          /{props.phonetic.text}/
        </h2>
      </div>
    );
  } else {
    return <h2>/{props.phonetic.text}/</h2>;
  }
}
