import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h1>Who are we?</h1>
        <p>
          We are a group of gaming enthusiasts who enjoy spending quality time
          together in the World of Warcraft universe. While our guild primarily
          focuses on mythic <span class="highlight-word-red">raiding</span>, we
          also engage in legacy content,
          <span class="highlight-word-red"> achievement</span> runs,{" "}
          <span class="highlight-word-red"> Mythic+</span> challenges,
          <span class="highlight-word-red"> PvP</span> combat,{" "}
          <span class="highlight-word-red"> mount farming</span>, and whatever
          you come up with. The more challenging the task, the more we enjoy it.
          What sets our guild apart is its diverse core beyond just the mythic
          raiding team.
        </p>
        <div className="pictures">
          <img src="/raiding_2.png"></img>
          <img src="/mythicplus.png"></img>
          <img src="/pvp.png"></img>
          <img src="/mounts.png"></img>
        </div>
      </div>
    </section>
  );
}

export default About;
