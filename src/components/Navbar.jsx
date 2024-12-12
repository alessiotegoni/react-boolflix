import { XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTBDB } from "../context/TMDBProvider";

export default function Navbar() {
  const { getSearch, getDiscover } = useTBDB();

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) getSearch(["movie", "tv"], { query: input });
  };

  const handleClick = () => {
    getDiscover(["movie", "tv"]);
    setInput("");
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-danger fs-2 fw-bold">
          Boolflix
        </Link>
        <form className="d-flex" role="input" onSubmit={handleSubmit}>
          <div className="d-flex position-relative">
            <input
              className="form-control nav-input"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={input}
              onChange={(e) => setInput(e.target.value.trim())}
            />
            {!!input && (
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
