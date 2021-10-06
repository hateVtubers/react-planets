import React, { useContext } from "react";
import { PlanetsContext } from "../context/planetsContext";

export const ContainerText = () => {
  const { state } = useContext(PlanetsContext);
  return (
    <div className="mb-6">
      <span className="text-sm">{state.info}</span>
    </div>
  );
};
