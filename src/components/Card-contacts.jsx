import React from "react";

const characters = [
  {
    id: 1,
    name: "Zuknar",
    role: "Guild master",
    discord: "zuknar",
    img: "/death-knight-unholy.jpg",
  },
  {
    id: 2,
    name: "Urge",
    role: "Raid leader",
    discord: "feeltheurge",
    img: "/hunter-beast-mastery.jpg",
  },
  {
    id: 3,
    name: "Silver",
    role: "Healing officer",
    discord: "silverskips",
    img: "/priest-discipline.jpg",
  },
  {
    id: 4,
    name: "Kazz",
    role: "Officer",
    discord: "kazz90",
    img: "/death-knight-frost.jpg",
  },
  {
    id: 5,
    name: "Buffed",
    role: "Officer",
    discord: "trihard",
    img: "/warrior-arms.jpg",
  },
];

const CardListItem = (props) => {
  return (
    <div className="card">
      <img src={props.character.img} alt="picture"></img>
      <h2>{props.character.name}</h2>
      <h3>{props.character.role}</h3>
      <div className="card-contact">
        <p>
          <img className="discordlogo" src="/discordlogo.jpg"></img>
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
