import { useMovies } from "../../../context/MoviesProvider";
import { useTvSeries } from "../../../context/TvSeriesProvider";
import GenresSelect from "../../shared/GenresSelect";

export default function Home() {
  const { genres: movieGenres } = useMovies();
  const { genres: seriesGenres } = useTvSeries();

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Movies</h1>
        <GenresSelect genres={movieGenres} />
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <h1>Tv series</h1>
        <GenresSelect genres={seriesGenres} />
      </div>
    </div>
  );
}
