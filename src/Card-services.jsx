import React from "react";
import goldIcon from "./assets/gold-icon.png";

const boostServices = [
  {
    id: 1,
    name: "Coaching",
    price: "50.000",
  },
  {
    id: 2,
    name: "Normal Raid",
    price: "80.000",
  },
  {
    id: 3,
    name: "HC Raid",
    price: "120.000",
  },
  {
    id: 4,
    name: "Mythic Raid",
    price: "300.000",
  },
  {
    id: 5,
    name: "VIP Normal Raid",
    price: "110.000",
  },
  {
    id: 6,
    name: "VIP Heroic Raid",
    price: "150.000",
  },
  {
    id: 7,
    name: "Leveling",
    price: "50.000",
  },
  {
    id: 8,
    name: "PVP",
    price: "100.000",
  },
];

const CardBoostServicesListItem = ({ name, price }) => {
  return (
    <div className="card-services">
      <img src="https://via.placeholder.com/250" alt="picture"></img>
      <h2>{name}</h2>
      <div className="price-and-gold">
        <h3>
          {price} <img className="gold-icon" src={goldIcon}></img>
        </h3>
      </div>
      <button>Add</button>
    </div>
  );
};

function CardBoostServices() {
  return (
    <ul className="box-services">
      {boostServices.map((boostService) => {
        return (
          <CardBoostServicesListItem {...boostService} key={boostService.id} />
        );
      })}
    </ul>
  );
}

export default CardBoostServices;
