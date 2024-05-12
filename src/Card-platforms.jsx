import React from "react";
/* import wclLogo from "/public/logs3-removebg-preview.png";
import raiderIOLogo from "./assets/raideriologo.jpg";
import gowLogo from "./assets/guilds-of-wow-logo.jpg";
import wowProgressLogo from "./assets/raideriologo.jpg";
import wowForumsLogo from "./assets/blizzardforumpicture.jpg";
import mmoChampionLogo from "./assets/MMOlogo.jpg";
import guildDiscordLogo from "./assets/discordlogo.jpg";
*/

const platforms = [
  {
    id: 1,
    name: "Warcraft Logs",
    img: "/public/logs3-removebg-preview.png",
    url: "https://www.warcraftlogs.com/guild/id/594112",
  },
  {
    id: 2,
    name: "Raider.IO",
    img: "/public/raideriologo.jpg",
    url: "https://raider.io/guilds/eu/ragnaros/Dirty%20Zuk%20and%20the%20Boyz",
  },
  {
    id: 3,
    name: "Guilds of WoW",
    img: "/public/guilds-of-wow-logo.jpg",
    url: "https://guildsofwow.com/dirty-zuk-and-the-boyz",
  },
  {
    id: 4,
    name: "WoW Progress",
    img: "/public/wowprogress.png",
    url: "https://www.wowprogress.com/guild/eu/ragnaros/Dirty+Zuk+and+the+Boyz",
  },
  {
    id: 5,
    name: "WoW Forum",
    img: "/public/blizzardforumpicture.jpg",
    url: "https://eu.forums.blizzard.com/en/wow/t/eu-ragnaros-dirty-zuk-the-boyz-recruiting-still-relevant/502115",
  },
  {
    id: 6,
    name: "MMO Champion",
    img: "/public/MMOlogo.jpg",
    url: "https://www.mmo-champion.com/threads/2647756-Dirty-Zuk-and-the-Boyz-M7-9-Ragnaros(EU)-2-night",
  },
  {
    id: 7,
    name: "Guild Discord",
    img: "/public/discordlogo.jpg",
    url: "https://discord.gg/nV3HMhVSR7",
  },
];

const CardPlatformsListItem = ({ name, img, url }) => {
  return (
    <div className="card-platforms">
      <a className="url" href={`${url}`} target="_blank">
        <img className="platforms-logo" src={img} alt="picture"></img>
        <h2>{name}</h2>
      </a>
    </div>
  );
};

function CardPlatforms() {
  return (
    <ul>
      {platforms.map((platform) => {
        return <CardPlatformsListItem {...platform} key={platform.id} />;
      })}
    </ul>
  );
}

export default CardPlatforms;
