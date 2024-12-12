import { XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useMovies } from "../context/MoviesProvider";
import { useTvSeries } from "../context/TvSeriesProvider";
import { useState } from "react";

export default function Navbar() {
  const { searchMovies } = useMovies();
  const { searchSeries } = useTvSeries();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      searchMovies(search);
      searchSeries(search);
    }
  };

  const handleClick = () => {
    setSearch("");
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-danger fs-2">
          Boolflix
        </Link>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <div className="d-flex position-relative">
            <input
              className="form-control nav-input"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value.trim())}
            />
            {!!search && (
              <XIcon
                size={20}
                absoluteStrokeWidth
                className="x-icon"
                onClick={handleClick}
              />
            )}
          </div>
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
