import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Header from "./views/list-view/components/header/Header";
import Search from "./views/list-view/components/search/search";
import ListViewComponent from "./views/list-view/list-view.component";
import {
  StarWarsCharacter,
  StarWarsPeople,
  queryState,
} from "./interfaces/index";
type getQueryFn = (a: string) => void;

function App() {
  const [query, setQuery] = useState<any>("");

  const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);

  function getQuery(query: string): void {
    return setQuery(query);
  }
  useEffect(() => {
    const url = "https://swapi.dev/api/people";
    const fetchCharacters = async () => {
      const res = await axios(url);
      const people = res.data.results;
      setCharacters([characters, ...people]);
    };
    fetchCharacters();
  }, []);

  return (
    <div className="app">
      <Header />
      <Search getQuery={getQuery} />
      <main>
        <ListViewComponent characters={characters} />
      </main>
    </div>
  );
}

export default App;
