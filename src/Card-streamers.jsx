import React from "react";
import twitchLogo from "./assets/twitch-icon.png";

const streamers = [
  {
    id: 1,
    name: "DirtyThicc",
    img: "/public/dirtythicc.jpg",
    url: "https://www.twitch.tv/dirtythicc",
  },
  {
    id: 2,
    name: "Universalunicorn",
    img: "/public/unitwitchlogoshort.png",
    url: "https://www.twitch.tv/universalunicorn",
  },
];

const CardStreamersListItem = ({ img, name, url }) => {
  return (
    <div className="card-streamers">
      <a className="url" href={`${url}`} target="_blank">
        <img className="twitchstreamers" src={img} alt="picture"></img>
        <h2>
          <img className="twitchlogo" src={twitchLogo}></img>
          {name}
        </h2>
      </a>
    </div>
  );
};
/*
function CardStreamers(){
  return(
    <ul>
      {streamers.map(streamer => {
        return <CardStreamersListItem streamer={streamer} key={streamer.id}/>;
      })}
    </ul>
  );
};

export default CardStreamers;
*/

function CardStreamers() {
  return (
    <ul>
      {streamers.map((streamer) => {
        return <CardStreamersListItem {...streamer} key={streamer.id} />;
      })}
    </ul>
  );
}

export default CardStreamers;
