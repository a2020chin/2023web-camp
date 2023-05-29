import { createContext, useContext } from "react";

export const FilterProductContext = createContext(null);

export const AnimeParameterContext = createContext(null);

export const useFilterProduct = () => {
  return useContext(FilterProductContext);
};
export const useAnimeParameter = () => {
  return useContext(AnimeParameterContext);
};
