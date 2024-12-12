import { useMovies } from "../context/MoviesProvider";
import { useTvSeries } from "../context/TvSeriesProvider";

export default function GenresSelect({ genres, type }) {
  const { getSeries } = useTvSeries();
  const { getMovies } = useMovies();

  const handleChange = (e) => {
    const genreId = e.target.value;

    switch (type) {
      case "movie":
        getMovies(genreId);
        break;
      case "tv":
        getSeries(genreId);
        break;
      default:
        console.error(`${type} is't a valid type`);
    }
  };

  return (
    <select
      class="form-select categories-select"
      aria-label="Default select example"
      onChange={handleChange}
    >
      <option>All</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}
