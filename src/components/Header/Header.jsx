import React from "react";
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Fundamental", "Crucial", "Core"];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const Header = () => {
  const descriptionAdjective =
    reactDescription[getRandomInt(reactDescription.length)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptionAdjective} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
};

export default Header;
