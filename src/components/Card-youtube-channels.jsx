import React from "react";

const youtubeChannels = [
  {
    id: 1,
    name: "Dirty Zuk & The Boyz",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Universalunicorn",
    img: "https://via.placeholder.com/150",
  },
];

const CardYoutubeListItem = ({ name, img }) => {
  return (
    <div className="card-youtube">
      <img src={img} alt="picture"></img>
      <h2>{name}</h2>
    </div>
  );
};

function CardYoutube() {
  return (
    <ul>
      {youtubeChannels.map((youtubeChannel) => {
        return (
          <CardYoutubeListItem {...youtubeChannel} key={youtubeChannel.id} />
        );
      })}
    </ul>
  );
}

export default CardYoutube;
