import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("Favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(Favorites));
  }, [Favorites]);

  const addtoFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removefromFavorites = (imdbID) => {
    setFavorites((prev) => prev.filter((m) => m.imdbID !== imdbID));
  };

  const isFavorites = (imdbID) => {
    return Favorites.some((m) => m.imdbID === imdbID);
  };

  const value = {
    Favorites,
    addtoFavorites,
    removefromFavorites,
    isFavorites,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
