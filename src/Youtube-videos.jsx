import React from "react";
import YouTube from "react-youtube";

function YoutubeVideos() {
  return (
    <div className="youtube-videos">
      <h2>Check out our YouTube videos as well!</h2>
      <div className="video">
        <YouTube className="youtube-video" videoId="1nvsqY8XhvY"></YouTube>
        <YouTube className="youtube-video" videoId="miDbfj_Y2ls"></YouTube>
        <YouTube className="youtube-video" videoId="aHLuHA5UvZg"></YouTube>
        <YouTube className="youtube-video" videoId="sVow3fYPwCc"></YouTube>
      </div>
    </div>
  );
}

export default YoutubeVideos;
