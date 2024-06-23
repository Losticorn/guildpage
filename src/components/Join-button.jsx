import React from "react";

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
    <a
      href="https://apply.wowaudit.com/eu/ragnaros/dirty-zuk-and-the-boyz/main?preview"
      target="_blank"
    >
      <button className="join-button">Join us!</button>
    </a>
  );
}

export default JoinButton;
