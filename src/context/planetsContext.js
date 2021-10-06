import { createContext, useReducer } from "react";
import reducer from "./Reducer";
import data from "./data.json";
import miniData from "./miniData.json";
import planets from "./planets.json";

export const PlanetsContext = createContext();

const initialState = {
  info: data[2].data,
};

export const PlanetsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getInfo = (t, p) => {
    dispatch({ type: t, payload: p });
  };

  return (
    <PlanetsContext.Provider
      value={{
        planets,
        data,
        miniData,

        state,
        getInfo,
      }}
    >
      {children}
    </PlanetsContext.Provider>
  );
};
