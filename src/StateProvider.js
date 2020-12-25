import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, reducer, initState }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
