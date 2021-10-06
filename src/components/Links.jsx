import React, { useContext } from "react";
import { PlanetsContext } from "../context/planetsContext";
import { Link } from "react-router-dom";

export const Links = ({ name }) => {
  const { getInfo, data } = useContext(PlanetsContext);
  const res = data.filter((r) => r.name === name)[0];
  return (
    <Link
      to={`/${name}`}
      className="uppercase mr-8 text-xs hover:text-primary"
      onClick={() => {
        getInfo("01", res);
      }}
    >
      {name}
    </Link>
  );
};
