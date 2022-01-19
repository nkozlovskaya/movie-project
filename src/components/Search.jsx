import React, { useState } from "react";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(() => event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          placeholder="Search"
          type="search"
          className="validate"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              checked={type === "all"}
              data-type="all"
              onChange={handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              checked={type === "movie"}
              data-type="movie"
              onChange={handleFilter}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              checked={type === "series"}
              data-type="series"
              onChange={handleFilter}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export { Search };
