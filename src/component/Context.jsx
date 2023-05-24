import { createContext, useContext } from "react";

export const FilterProductContext = createContext(null);

export const useFilterProduct = () => {
  return useContext(FilterProductContext);
};
