import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  return isTablet ? children : null;
};

const Div = styled.div`
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  color: #6b7280;
  &:hover {
    transition: 0.9s;
    color: #0d0c35;
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
    bottom: 0;
    border-radius: 50% 50% 0 0;
  }
  &:hover::before {
    height: 180%;
  }
`;

export const Rectangle = ({ title, data }) => {
  return (
    <>
      <Desktop>
        <Div className="w-56 border-2 mt-16 border-primary py-4 pl-4">
          <h6 className="text-sm" style={{ color: "inherit" }}>
            {title}
          </h6>
          <span className="text-2xl" style={{ color: "#eeeeef" }}>
            {data}
          </span>
        </Div>
      </Desktop>
      <Mobile>
        <Div className="w-56 border-2 mt-16 border-primary py-4 pl-4 mx-auto">
          <h6 className="text-sm" style={{ color: "inherit" }}>
            {title}
          </h6>
          <span className="text-2xl" style={{ color: "#eeeeef" }}>
            {data}
          </span>
        </Div>
      </Mobile>
    </>
  );
};

/* rafc */
