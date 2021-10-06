import React, { useContext } from "react";
import { PlanetsContext } from "../../context/planetsContext";
import mercury from "./svg/mercury.svg";
import venus from "./svg/venus.svg";
import earth from "./svg/earth.svg";
import mars from "./svg/mars.svg";
import jupiter from "./svg/jupiter.svg";
import saturn from "./svg/saturn.svg";
import uranus from "./svg/uranus.svg";
import neptune from "./svg/neptune.svg";


const all = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
const allWidth = [
  "60px",
  "150px",
  "170px",
  "110px",
  "370px",
  "340px",
  "240px",
  "195px",
];

export const Globe = ({ planet, m }) => {
  const { planets } = useContext(PlanetsContext);
  const res = planets.indexOf(planet);
  return (
    <div className={`flex items-center ${m}`}>
      <img
        src={all[res]}
        alt={planet}
        width={allWidth[res]}
      />
    </div>
  );
};
