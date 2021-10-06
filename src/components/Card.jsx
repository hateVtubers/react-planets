import React, { useContext } from "react";
import { PlanetsContext } from "../context/planetsContext";
import { Options } from "./Options";
import { ContainerText } from "./ContainerText";

export const Card = ({ planet, m }) => {
  const { data } = useContext(PlanetsContext);
  const res = data.filter((r) => r.name === planet)[0];
  return (
    <div className={`w-72 overflow-hidden ${m}`}>
      <h2 className="text-5xl my-7 uppercase">{planet}</h2>
      <ContainerText></ContainerText>
      <div className="mb-6">
        <span className="text-secondary">
          Source:
          <a
            href={`https://en.wikipedia.org/wiki/${planet}_(planet)`}
            className="text-primary ml-2"
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia
          </a>
        </span>
      </div>
      <div className="space-y-4">
        <Options number="01" text="overview" infoP={res}></Options>
        <Options number="02" text="internal structure" infoP={res}></Options>
        <Options number="03" text="surface geology" infoP={res}></Options>
      </div>
    </div>
  );
};
