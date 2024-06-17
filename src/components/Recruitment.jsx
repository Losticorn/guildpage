import React from "react";
import GenerateDIV from "./GenerateDIV";
import JoinButton from "./Join-button";

function Recruitment() {
  return (
    <section id="recruitment" className="recruitment">
      <h1>Are you a good fit?</h1>
      <p>
        We aim to grow our guild with active players who thrive in an
        environment characterized by friendly banter and mutual growth. Our
        guild welcomes everyone (not only raiders), with the exception of those
        who introduce drama or toxicity. The only proper selection is being done
        on mythic raiding level. Each application is carefully reviewed. If
        we're not actively seeking your class, but you believe you're a
        mechanically or exceptionally skilled player, we encourage you to apply.
        If you're keen to begin your trial period, please fill in the
        application. We'll review it promptly and either provide words of
        encouragement or extend an invitation for a trial.
      </p>
      <JoinButton></JoinButton>
    </section>
  );
}

export default Recruitment;
