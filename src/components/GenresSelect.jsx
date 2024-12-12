import { useTBDB } from "../context/TMDBProvider";

export default function GenresSelect({ type }) {
  const { genres, getDiscover } = useTBDB(type);

  const handleChange = (e) =>
    getDiscover(type, { with_genres: e.target.value });

  return (
    <select
      class="form-select categories-select"
      aria-label="Default select example"
      onChange={handleChange}
    >
      <option value="">All</option>
      {genres?.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}
