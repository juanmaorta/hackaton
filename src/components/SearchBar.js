import React from "react";
import Input from "./Input";

const SearchBar = ({ placeHolder, title, onSubmit }) => (
  <nav className="navbar navbar-dark bg-dark justify-content-between navbar-fixed-top">
    <div className="navbar-brand">{title}</div>
    <form className="form-inline">
      <Input name="q" placeHolder={placeHolder} onSubmit={onSubmit} />
      <button className="btn btn-dark my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
);

export default SearchBar;
