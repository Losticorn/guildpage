import React from "react";

const navigationItems = [
  {
    id: 1,
    name: "Home",
    navigation: "hero",
  },
  {
    id: 2,
    name: "About",
    navigation: "about",
  },
  {
    id: 3,
    name: "Raiding",
    navigation: "raiding",
  },
  {
    id: 4,
    name: "Recruitment",
    navigation: "recruitment",
  },
  {
    id: 5,
    name: "Platforms",
    navigation: "platforms",
  },
  {
    id: 6,
    name: "Streamers",
    navigation: "streamers",
  },
  {
    id: 7,
    name: "Contact",
    navigation: "contact",
  },
];

const NavigationItemsList = ({ name, navigation }) => {
  return (
    <li>
      <a href={`#${navigation}`}>{name}</a>
    </li>
  );
};

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        {navigationItems.map((navigationItem) => (
          <NavigationItemsList {...navigationItem} key={navigationItem.id} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
