import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavContext = createContext();

function FavProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const isInFavorites = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const addToFavorites = (product) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [...prev, product];
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const totalFavorites = favorites.length;

  const value = {
    favorites,
    totalFavorites,
    isInFavorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    clearFavorites,
  };

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
}

export default FavProvider;

export function useFav() {
  return useContext(FavContext);
}