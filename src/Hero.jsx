import React from "react";
import guildBanner from "./assets/guild-banner-cropped.jpg";
import JoinButton from "./Join-button";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section-left">
        <h1>Dirty Zuk &</h1>
        <h1 id="padding-text">The Boyz</h1>
        <p>
          Are you a World of Warcraft fan? <br /> Would you like to step up your
          game experience? <br /> Are you up to playing with like-minded people?{" "}
          <br /> You are at the right place! <br /> Come join us and get your
          dirt on!
        </p>
        <JoinButton />
      </div>
      <div className="hero-section-right">
        <img src={guildBanner} alt="guild-banner"></img>
      </div>
    </section>
  );
}

export default Hero;
