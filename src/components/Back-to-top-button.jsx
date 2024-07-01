import "./Back-to-top-button.css";
import { PiArrowSquareUpLight } from "react-icons/pi";
import "../scripts/ShowBackToTopBtn.js";

function BackToTopButton() {
  return (
    <button id="backToTopBtn">
      <a href="#hero">
        <PiArrowSquareUpLight size={45} color="white" />
      </a>
    </button>
  );
}

export default BackToTopButton;
