import React, { useContext } from "react";
import { PlanetsContext } from "../context/planetsContext";
import styled from "styled-components";

const Button = styled.button`
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  &:hover {
    transition: 0.8s;
    color: #07061b;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: #9467dc;
    z-index: -1;
    transition: 0.8s;
  }
  &::before {
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  &:hover::before {
    height: 180%;
  }

  &:active {
    transition: none;
    background: #07061b;
    color: #eeeeef;
  }
`;

export const Options = ({ text, number, infoP }) => {
  const { getInfo } = useContext(PlanetsContext);
  return (
    <Button
      className="bg-transparent border-2 border-primary block w-full py-2 text-left overflow-hidden"
      onClick={() => {
        getInfo(number, infoP);
      }}
    >
      <span className="text-sm ml-6">{number}</span>
      <span className="uppercase ml-6 text-sm">{text}</span>
    </Button>
  );
};
