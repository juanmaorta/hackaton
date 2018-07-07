import React from "react";

const SearchBar = ({}) => (
  <nav className="navbar navbar-dark bg-dark justify-content-between navbar-fixed-top">
    <div className="navbar-brand">Welcome to Giffy</div>
    <form className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-dark my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
);

export default SearchBar;
