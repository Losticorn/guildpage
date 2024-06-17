import React, { useState } from "react";
import Questionaire from "./Questionaire.jsx";

//generate div which will contain paragpraph for question and response area (no buttons), filling will be done via function

/* commented out function to replace with a simple link https://apply.wowaudit.com/eu/ragnaros/dirty-zuk-and-the-boyz/main?preview

function GenerateDIV() {

  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(true);
  };

  return (
    <div class="generated-div">
      <button className="join-button" onClick={handleButtonClick}>
        Join us!
      </button>
      {showDiv && (
        <div id="questions">
          <Questionaire></Questionaire>
        </div>
      )}
    </div>
  );
}
*/
// below is skewed version of the code above
function GenerateDIV() {
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(true);
  };

  return (
    <div class="generated-div">
      <button className="join-button" onClick={handleButtonClick}>
        <a
          href="https://apply.wowaudit.com/eu/ragnaros/dirty-zuk-and-the-boyz/main"
          target="_blank"
        >
          Join us!
        </a>
      </button>
    </div>
  );
}

export default GenerateDIV;
