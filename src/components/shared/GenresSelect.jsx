export default function GenresSelect({ genres }) {
  return (
    <select
      class="form-select categories-select"
      aria-label="Default select example"
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
