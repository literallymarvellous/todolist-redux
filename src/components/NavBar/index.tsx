import React from "react";

type Props = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar: React.FC<Props> = ({ setPage }) => {
  const handlePage = (page: string) => {
    setPage(page);
  };
  return (
    <nav>
      <button onClick={() => handlePage("planets")}>Planets</button>
      <button onClick={() => handlePage("people")}>People</button>
    </nav>
  );
};

export default NavBar;
