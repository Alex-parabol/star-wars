import React, { useState } from "react";
import { SearchProps } from "../../../../interfaces";

const Search = ({ getQuery }: SearchProps) => {
  const [text, setText] = useState("");

  const onChange = (query: string) => {
    setText(query);
    getQuery(query);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
      <button>Planets</button>
    </section>
  );
};

export default Search;
