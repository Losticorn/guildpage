import React from "react";
import GenerateDIV from "./GenerateDIV";

/*
function JoinButton() {
  return (
    <div className="questions">
      <button onClick={GenerateDIV} className="join-button">
        Join us!
      </button>
    </div>
  );
}
*/

function JoinButton() {
  return (
    <div className="questions">
      <a
        href="https://apply.wowaudit.com/eu/ragnaros/dirty-zuk-and-the-boyz/main?preview"
        target="_blank"
      >
        <button className="join-button">Join us!</button>
      </a>
    </div>
  );
}

export default JoinButton;
