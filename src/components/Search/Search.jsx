import React from "react";
import "./Search.css";
export default function Search({ setSearch }) {
  return (
    <div className="search">
      <input
        className="form-control"
        id="tags"
        autoComplete="off"
        autoFocus
        placeholder="Search character..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
}
