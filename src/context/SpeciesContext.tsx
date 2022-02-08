import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { StarWarsSpecie, SpeciesContextValue } from "../interfaces/index";
// creamos el context

export const SpeciesContext = createContext<SpeciesContextValue>({
  species: [],
  search: (search?: string) => {},
});

// Generamos un provider y un state

const SpeciesProvider = (props: any) => {
  const [species, setSpecies] = useState<StarWarsSpecie[]>([]);

  useEffect(() => {
    search(undefined);
  }, []);

  //Si existe una búsqueda desde el componente, lo anexamos, si no, reseteamos el endpoint.
  function search(search?: string) {
    const fetchSpecies = async () => {
      const url = `https://swapi.dev/api/species${
        search ? "?search=" + search : "/"
      }`;

      const result = await axios.get(url);
      const res = result.data.results;

      setSpecies([...res]);
    };
    fetchSpecies();
  }
  return (
    <SpeciesContext.Provider
      value={{
        species,
        search,
      }}
    >
      {props.children}
    </SpeciesContext.Provider>
  );
};

export default SpeciesProvider;
