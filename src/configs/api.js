import axios from "axios";

export const baseURL = "https://api.themoviedb.org/3/";

export const movieApi = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}` },
  params: { include_adult: true },
});
