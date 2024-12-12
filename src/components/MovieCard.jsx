import { Star } from "lucide-react";
import { countryFlags } from "../constants/index";

export default function MovieCard({
  vote_average,
  poster_path,
  title,
  name,
  original_title,
  original_name,
  original_language,
  overview,
}) {
  const vote = Math.ceil(vote_average / 2);

  return (
    <article className="movie-card">
      <figure className="m-0">
        <img
          className="w-100 object-fit-cover"
          alt={title}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : "/poster-placeholder.png"
          }
        />
      </figure>
      <div className="movie-overlay">
        <div>
          <strong>Titolo: </strong>
          <span>{title || name}</span>
        </div>
        <div>
          <strong>Titolo originale: </strong>
          <span>{original_title || original_name}</span>
        </div>
        <div>
          <strong>Voto: </strong>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} fill={i < vote && "yellow"} />
          ))}
        </div>
        <div>
          <strong>Lingua originale: </strong>
          {countryFlags[original_language] ? (
            <img
              width={30}
              className="rounded-1"
              src={countryFlags[original_language]}
              alt={original_language}
            />
          ) : (
            <span>{original_language}</span>
          )}
        </div>
        {overview && (
          <div>
            <strong>Overview: </strong>
            <span>{overview}</span>
          </div>
        )}
      </div>
    </article>
  );
}
