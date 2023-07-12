// Concepts.js file >> parent for card component

import React from "react";
import Card from "./ui/Card";

const Concepts = ({ data }) => {
  return (
    <ul id="concepts">
      <Card className="concept">
        <img src={data[0].image} alt="TODO: TITLE" />
        <h2>{data[0].title}</h2>
        <p>{data[0].description}</p>
      </Card>
      <Card className="concept">
        <img src={data[1].image} alt="TODO: TITLE" />
        <h2>{data[1].title}</h2>
        <p>{data[1].description}</p>
      </Card>
      <Card className="concept">
        <img src={data[2].image} alt="TODO: TITLE" />
        <h2>{data[2].title}</h2>
        <p>{data[2].description}</p>
      </Card>
    </ul>
  );
};

export default Concepts;
