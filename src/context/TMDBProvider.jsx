import { createContext, useContext, useEffect, useState } from "react";
import { fetchTMDB } from "../lib/utils";

const TBDBContext = createContext();

const discoverInitialState = { movie: [], tv: [] };

export default function TMDBProvider({ children }) {
  const [discover, setDiscover] = useState(discoverInitialState);
  const [genres, setGenres] = useState({});

  const getDiscover = (discoverType, params = {}) => {
    fetchTMDB("/discover", discoverType, params, (type, data) => {
      setDiscover((prevDiscover) => ({
        ...prevDiscover,
        [type]: data.results,
      }));
    });
  };

  const getSearch = (searchType, params = {}) => {
    fetchTMDB("/search", searchType, params, (type, data) => {
      setDiscover((prevDiscover) => ({
        ...prevDiscover,
        [type]: data.results,
      }));
    });
  };

  const getGenres = (genreType, params = {}) => {
    fetchTMDB("/genre", genreType, params, (type, data) => {
      setGenres((prevGenres) => ({
        ...prevGenres,
        [type]: data.genres,
      }));
    });
  };

  useEffect(() => {
    getDiscover(["movie", "tv"]);
    getGenres(["movie", "tv"]);
  }, []);

  return (
    <TBDBContext.Provider
      value={{ discover, getDiscover, getSearch, genres, getGenres }}
    >
      {children}
    </TBDBContext.Provider>
  );
}

export const useTBDB = (type) => {
  const { discover, genres, ...restValues } = useContext(TBDBContext);
  if (!discover) throw new Error("UsTMDB must be used inside of TMDBProvider");

  // console.log(discover, genres);

  return {
    results: discover[type],
    genres: genres[type],
    ...restValues,
  };
};
