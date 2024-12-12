import GenresSelect from "./GenresSelect";

export default function Section({ title, type }) {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{title}</h1>
        <GenresSelect type={type} />
      </div>
    </section>
  );
}
