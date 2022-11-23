import React, { createContext, useContext, useState } from "react";
//InitialState
import initialState from "../initialState";
export const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useTasks must be used within a AppContextProvider");
  }
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return (
    <AppContext.Provider
      value={{
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
