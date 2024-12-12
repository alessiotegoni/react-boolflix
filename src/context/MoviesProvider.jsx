import { createContext, useContext, useEffect, useState } from "react";
import { movieApi } from "../configs/api";

const MoviesContext = createContext();

export default function MoviesProvider({ children }) {
  //   const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    try {
      const { data } = await movieApi.get("/search/movie", {
        params: { query },
      });
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(movies);

  return (
    <MoviesContext.Provider value={{ movies, setMovies, searchMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context)
    throw new Error("UseMovies must be used inside of MoviesProvider");

  return context;
};
