import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Header from "./views/list-view/components/header/Header";
import Search from "./views/list-view/components/search/search";
import Species from "./views/list-view/components/species/Species";
import ListViewComponent from "./views/list-view/list-view.component";
import { StarWarsCharacter } from "./interfaces/index";
import SpeciesProvider from "./context/SpeciesContext";
import { Routes, Route } from "react-router-dom";
import SpeciesDetail from "./views/list-view/components/detail/SpeciesDetail";

function App() {
  const [query, setQuery] = useState<any>("");
  const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);
  const [loading, setLoading] = useState(false);

  function getQuery(query: string): void {
    setQuery(query);
  }

  //ENDPOINT /people?search=R2-D2
  useEffect(() => {
    setLoading(true);
    const url = `https://swapi.dev/api/people?search=${query}`;

    const fetchCharacters = async () => {
      const res = await axios(url);
      const people = res.data.results;
      setCharacters(people);
      setLoading(false);
    };
    if (!loading) {
      fetchCharacters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    const url = "https://swapi.dev/api/people/";
    const fetchCharacters = async () => {
      const res = await axios(url);
      const people = res.data.results;
      setCharacters([...characters, ...people]);
    };
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SpeciesProvider>
      <div className="app">
        <Header />
        <Search getQuery={getQuery} />
        <main>
          <Routes>
            <Route
              path="*"
              element={<ListViewComponent characters={characters} />}
            />
            <Route path="/species" element={<Species />} />
            <Route path="/species/:name">
              <Route path="/species/:name" element={<SpeciesDetail />} />
            </Route>
          </Routes>
        </main>
      </div>
    </SpeciesProvider>
  );
}

export default App;
