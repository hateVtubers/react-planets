import React, { useContext } from "react";
import { PlanetsContext } from "../context/planetsContext";
import { Rectangle } from "./Rectangle";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  return isTablet ? children : null;
};

export const Container = ({ planet }) => {
  const { miniData } = useContext(PlanetsContext);
  const res = Object.entries(miniData.filter((r) => r.name === planet)[0]);
  res.shift();
  return (
    <>
      <Desktop>
        <footer className="flex justify-evenly mb-12">
          {res.map((i) => (
            <Rectangle title={i[0]} data={i[1].toUpperCase()} key={i[0]}></Rectangle>
          ))}
        </footer>
      </Desktop>
      <Mobile>
        <footer className="flex justify-evenly mb-12 flex-col">
          {res.map((i) => (
            <Rectangle title={i[0]} data={i[1].toUpperCase()} key={i[0]}></Rectangle>
          ))}
        </footer>
      </Mobile>
    </>
  );
};
