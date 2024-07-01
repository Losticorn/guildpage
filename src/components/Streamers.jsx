import React from "react";
import CardStreamers from "./Card-streamers";

function Streamers() {
  return (
    <div id="streamers" className="streamers-section">
      <h1>We are streaming!</h1>

      <p>
        If you'd like to get a sense of who we are before submitting your
        application, please feel free to check out our streamers or YouTube
        videos. Our communications are always active, allowing you to witness
        firsthand the quality of our community.
      </p>
      <CardStreamers></CardStreamers>
    </div>
  );
}

export default Streamers;
