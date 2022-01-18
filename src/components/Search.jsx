import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "all",
  };
  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };
  render() {
    const { search } = this.state;
    return (
      <div classNameName="row">
        <div classNameName="input-field">
          <input
            placeholder="Search"
            type="search"
            classNameName="validate"
            value={search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            classNameName="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
          <div>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                checked={this.state.type === "all"}
                data-type="all"
                onChange={this.handleFilter}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                checked={this.state.type === "movie"}
                data-type="movie"
                onChange={this.handleFilter}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                checked={this.state.type === "series"}
                data-type="series"
                onChange={this.handleFilter}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
