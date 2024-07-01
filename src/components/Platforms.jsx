import React from "react";
import CardPlatforms from "./Card-platforms";

function Platforms() {
  return (
    <section id="platforms" className="platforms-section">
      <h1>We are everywhere!</h1>
      <p>
        As an active guild, we maintain a presence on multiple platforms. This
        approach allows us to showcase our guild effectively and connect with as
        many like-minded gamers as possible.
      </p>
      <CardPlatforms></CardPlatforms>
    </section>
  );
}

export default Platforms;
