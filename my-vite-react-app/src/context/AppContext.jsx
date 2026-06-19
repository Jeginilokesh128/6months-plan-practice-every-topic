import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  // Define your initial state here
};

const reducer = (state, action) => {
  switch (action.type) {
    // Define your action cases here
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};