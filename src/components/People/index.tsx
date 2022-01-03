import React from "react";
import { useQuery } from "react-query";
import Person from "../Person";

export type PersonType = {
  name: string;
  height: Date;
  mass: string;
  hair_color: Date;
  skin_color: string[];
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

const fetchPeople = async (): Promise<PersonType[]> => {
  const res = await fetch("http://swapi.dev/api/people/");
  const data = await res.json();
  return data.results;
};

const People = () => {
  const { data, status } = useQuery<PersonType[]>("people", fetchPeople);
  console.log(data);
  return (
    <div>
      <h2>People</h2>

      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error Fetching data...</div>}

      {status === "success" && (
        <div>
          {data?.map((person: PersonType) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
