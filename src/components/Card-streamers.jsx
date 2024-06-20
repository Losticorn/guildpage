import React from "react";

const streamers = [
  {
    id: 1,
    name: "DirtyThicc",
    img: "/dirtythicc.jpg",
    url: "https://www.twitch.tv/dirtythicc",
  },
  {
    id: 2,
    name: "Universalunicorn",
    img: "/unitwitchlogoshort-small.png",
    url: "https://www.twitch.tv/universalunicorn",
  },
];

const CardStreamersListItem = ({ img, name, url }) => {
  return (
    <div className="card-streamers">
      <a className="url" href={`${url}`} target="_blank">
        <img className="twitchstreamers" src={img} alt="picture"></img>
        <h2>
          <img className="twitchlogo" src="/twitch-icon.png"></img>
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
