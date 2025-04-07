import React from "react";

const CoreConcept = ({ image, title, description }) => {
  //Destructing the input object as props
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
