import React from "react";

import { Planet } from "../Planets";

type Props = {
  planet: Planet;
};

const SinglePlanet: React.FC<Props> = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Popluation - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default SinglePlanet;
