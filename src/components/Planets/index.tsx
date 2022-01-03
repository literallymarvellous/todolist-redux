import React, { useState } from "react";
import { QueryFunctionContext, QueryKey, useQuery } from "react-query";
import SinglePlanet from "../SinglePlanet";

export type Planet = {
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

const fetchPlanets = async (
  queryKey: QueryFunctionContext<QueryKey, any>
): Promise<Planet[]> => {
  const page = queryKey.queryKey[1];
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  const data = await res.json();
  return data.results;
};

const Planets: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery<Planet[]>(["planets", page], fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>

      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>

      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error Fetching data...</div>}

      {status === "success" && (
        <div>
          {data?.map((planet: Planet) => (
            <SinglePlanet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
