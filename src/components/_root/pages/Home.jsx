import Section from "../../Section";

export default function Home() {
  return (
    <div className="mt-5">
      <Section title="Movies" type="movie" />
      <Section title="Tv series" type="tv" />
    </div>
  );
}
