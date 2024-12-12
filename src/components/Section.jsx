import { useMovies } from "../context/MoviesProvider";
import { useTvSeries } from "../context/TvSeriesProvider";
import GenresSelect from "./GenresSelect";

export default function Section({ title, type }) {
  const { genres: movieGenres } = useMovies();
  const { genres: seriesGenres } = useTvSeries();

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{title}</h1>
        <GenresSelect
          genres={type === "movie" ? movieGenres : seriesGenres}
          type={type}
        />
      </div>
    </section>
  );
}
