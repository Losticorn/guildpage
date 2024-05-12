import React from "react";
import discordLogo from "/public/discordlogo.jpg";

const characters = [
  {
    id: 1,
    name: "Zuknar",
    role: "Guild master",
    discord: "zuknar",
  },
  {
    id: 2,
    name: "Urge",
    role: "Raid leader",
    discord: "feeltheurge",
  },
  {
    id: 3,
    name: "Unicorn",
    role: "Healing officer",
    discord: "unicorn6421",
  },
  {
    id: 4,
    name: "Silver",
    role: "Officer",
    discord: "silverskips",
  },
  {
    id: 5,
    name: "Kazz",
    role: "Officer",
    discord: "kazz90",
  },
  {
    id: 6,
    name: "Buffed",
    role: "Officer",
    discord: "trihard",
  },
];

const CardListItem = (props) => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="picture"></img>
      <h2>{props.character.name}</h2>
      <h3>{props.character.role}</h3>
      <div className="card-contact">
        <p>
          <img className="discordlogo" src={discordLogo}></img>{" "}
          {props.character.discord}
        </p>
      </div>
    </div>
  );
};

function Card() {
  return (
    <ul>
      {characters.map((character) => {
        return <CardListItem character={character} key={characters.id} />;
      })}
    </ul>
  );
}

export default Card;
