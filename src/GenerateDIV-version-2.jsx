import React, { useState } from "react";
import CardBoostServices from "./Card-services";

//generate div which will contain paragpraph for question and response area (no buttons), filling will be done via function

function GenerateDIV() {
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="generated-div">
      <button className="services-button" onClick={handleButtonClick}>
        {showDiv ? "Hide Services" : "Click to see our services."}
      </button>
      {showDiv && (
        <div id="questions">
          <CardBoostServices></CardBoostServices>
          <div className="cart">
            <h2>Your cart is empty!</h2>
            <button>Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GenerateDIV;
