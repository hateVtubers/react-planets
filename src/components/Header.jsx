import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { PlanetsContext } from "../context/planetsContext";
import { Link } from "react-router-dom";
import { Links } from "./Links";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  return isTablet ? children : null;
};

export const Header = () => {
  const { planets } = useContext(PlanetsContext);
  const [state, setState] = useState(false);
  return (
    <header className="flex justify-between items-center border-b-2 border-primary h-16">
      <Link to="/">
        <h1 className="text-2xl ml-8">THE PLANETS</h1>
      </Link>
      <nav className="flex">
        <Desktop>
          {planets.map((p) => (
            <Links name={p} key={p}></Links>
          ))}
        </Desktop>
        <Mobile>
          <button
            onClick={() => {
              setState(!state);
            }}
            className="mr-8"
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
          {state ? (
            <div
              className="flex flex-col items-center gap-y-4 w-24 absolute right-0 text-right py-8 border-primary rounded"
              style={{
                top: "65px",
                backgroundColor: "rgba(7, 6, 27, 0.733)",
                color: "#9467DC",
              }}
            >
              {planets.map((p) => (
                <Links name={p} key={p}></Links>
              ))}
            </div>
          ) : null}
        </Mobile>
      </nav>
    </header>
  );
};
