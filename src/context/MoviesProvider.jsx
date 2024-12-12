import { createContext, useContext, useEffect, useState } from "react";
import { movieApi } from "../configs/api";

const MoviesContext = createContext();

export default function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const getMovies = async (with_genres = []) => {
    try {
      const { data } = await movieApi.get("/discover/movie", {
        params: { with_genres },
      });
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

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

  const getGenres = async () => {
    try {
      const { data } = await movieApi.get("/genre/movie/list");
      setGenres(data.genres);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, getMovies, searchMovies, genres }}>
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
