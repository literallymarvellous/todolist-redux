import React from "react";

import { PersonType } from "../People";

type Props = {
  person: PersonType;
};

const Person: React.FC<Props> = ({ person }) => {
  return (
    <div className="card">
      <h3>{Person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth year - {person.birth_year}</p>
    </div>
  );
};

export default Person;
