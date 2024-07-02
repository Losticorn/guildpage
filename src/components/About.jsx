import React from "react";

function About() {
  return (
    <section id="about" className="about-section">
      <h1>Who are we?</h1>
      <p>
        We are a group of gaming enthusiasts who enjoy spending quality time
        together in the World of Warcraft universe. While our guild primarily
        focuses on mythic raiding, we also engage in legacy content, achievement
        runs, Mythic+ challenges, PvP combat, mount farming, and whatever you
        come up with. The more challenging the task, the more we enjoy it. What
        sets our guild apart is its diverse core beyond just the mythic raiding
        team.
      </p>
      <div className="pictures">
        <img src="/raiding_2.png"></img>
        <img src="/mythicplus.png"></img>
        <img src="/pvp.png"></img>
        <img src="/mounts.png"></img>
      </div>
    </section>
  );
}

export default About;
