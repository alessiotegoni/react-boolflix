import { createContext, useContext, useEffect, useState } from "react";
import { movieApi } from "../configs/api";

const MoviesContext = createContext();

export default function TvSeriesProvider({ children }) {
  const [series, setSeries] = useState([]);
  const [genres, setGenres] = useState([]);

  const getSeries = async (with_genres = []) => {
    try {
      const { data } = await movieApi.get("/discover/movie", {
        params: { with_genres },
      });
      setSeries(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const searchSeries = async (query) => {
    try {
      const { data } = await movieApi.get("/search/tv", {
        params: { query },
      });
      setSeries(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const getGenres = async () => {
    try {
      const { data } = await movieApi.get("/genre/tv/list");
      setGenres(data.genres);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSeries();
    getGenres();
  }, []);

  return (
    <MoviesContext.Provider value={{ series, getSeries, searchSeries, genres }}>
      {children}
    </MoviesContext.Provider>
  );
}

export const useTvSeries = () => {
  const context = useContext(MoviesContext);
  if (!context)
    throw new Error("UseTvSeris must be used inside of TvSeriesProvider");

  return context;
};
