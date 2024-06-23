import React from "react";
import JoinButton from "./Join-button.jsx";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section-left">
        <h1>Dirty Zuk & The Boyz</h1>
        <p>
          Are you a World of Warcraft fan? Would you like to step up your gaming
          experience? Are you up to playing with like-minded people? <br />{" "}
          <br />
          You are at the right place! Come join us and get your dirt on!
        </p>
        <JoinButton />
      </div>
      <div className="hero-section-right">
        <img src="/guild-banner-cropped.jpg" alt="guild-banner"></img>
      </div>
    </section>
  );
}

export default Hero;
