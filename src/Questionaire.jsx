import React, { useState } from "react";

const questions = [
  "Do you wanna join us as Social member or as a Raider?",
  "What level of raiding are you interested in?",
  "Do you have recent mythic experience (last two raid tier)?",
  "What is your main role?",
  "Please, choose what tanks you can play.",
  "Please, choose what healers you can play.",
  "Please, choose what DPS you can play.",
  "Having functional microphone is mandatory. Do you have it?",
  "Usage of said microphone.",
  "What do you expect from our guild?",
  "Do you have anything else you would like to add into your application?",
  "Lastly, please, provide us with a contact informations.",
  "How did you find us?",
  "Our guild is open to everyone, as long as you are following the rules of our guild. Please, read the rules and choose your answer.",
  "Normal and Heroic runs serves as a gearing instrument first 2-3 weeks of the raid tier. There is 99% chance, that you would not get any loot for first few weeks, because mythic raiders are being prioritised. Are you fine with this?",
  "What are your past mythic experience?",
];

function Questionaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerButtonClick = (nextQuestionIndex) => {
    setCurrentQuestionIndex(nextQuestionIndex);
  };

  const generateAnswerButtons = (index) => {
    switch (index) {
      case 0:
        return (
          <>
            <button onClick={() => handleAnswerButtonClick(12)}>Social</button>
            <button onClick={() => handleAnswerButtonClick(1)}>Raider</button>
          </>
        );
      case 1:
        return (
          <>
            <button onClick={() => handleAnswerButtonClick(14)}>
              Normal/Heroic
            </button>
            <button onClick={() => handleAnswerButtonClick(2)}>Mythic</button>
          </>
        );
      // Other cases...
      default:
        return (
          <button onClick={() => handleAnswerButtonClick(index + 1)}>
            Continue
          </button>
        );
    }
  };

  return (
    <div>
      <div className="question">
        <p>{questions[currentQuestionIndex]}</p>
      </div>
      <div className="response">
        {generateAnswerButtons(currentQuestionIndex)}
      </div>
    </div>
  );
}

export default Questionaire;
