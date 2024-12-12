import { useTBDB } from "../context/TMDBProvider";
import GenresSelect from "./GenresSelect";
import MovieCard from "./MovieCard";

export default function Section({ title, type }) {
  const { results } = useTBDB(type);

  return (
    <section className={title.toLowerCase().replaceAll(" ", "-") + " my-5"}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="m-0">{title}</h1>
        <GenresSelect type={type} />
      </div>
      {results.length ? (
        <div className="movies__container">
          {results.map((result) => (
            <MovieCard key={result.id} {...result} />
          ))}
        </div>
      ) : (
        <p>No results</p>
      )}
    </section>
  );
}
