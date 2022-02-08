import React, { useState, useContext } from "react";
import { SpeciesContext } from "../../../../context/SpeciesContext";
import { SearchProps } from "../../../../interfaces";

const Search = ({ getQuery }: SearchProps) => {
  const [text, setText] = useState("");
  const speciesContext = useContext(SpeciesContext);

  // mandamos al context la información del query para poder emplear la información globalmente.
  const onChange = (query: string) => {
    setText(query);
    getQuery(query);
    speciesContext.search(query);
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
    </section>
  );
};

export default Search;
