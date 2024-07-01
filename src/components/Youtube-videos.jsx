import React from "react";
import YouTube from "react-youtube";

function YoutubeVideos() {
  return (
    <section className="youtube-section">
      <h1>Check out our YouTube videos!</h1>
      <div className="videos">
        <YouTube className="youtube-video" videoId="1nvsqY8XhvY"></YouTube>
        <YouTube className="youtube-video" videoId="miDbfj_Y2ls"></YouTube>
        <YouTube className="youtube-video" videoId="aHLuHA5UvZg"></YouTube>
        <YouTube className="youtube-video" videoId="sVow3fYPwCc"></YouTube>
      </div>
    </section>
  );
}

export default YoutubeVideos;
