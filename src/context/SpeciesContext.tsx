import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { StarWarsSpecies, StarWarsSpecie } from "../interfaces/index";
// creamos el context

export const SpeciesContext = createContext<StarWarsSpecie[]>([]);

// Generamos un provider y un state

const SpeciesProvider = (props: any) => {
  const [species, setSpecies] = useState<StarWarsSpecie[]>([]);

  useEffect(() => {
    const fetchSpecies = async () => {
      const url = "https://swapi.dev/api/species/";

      const result = await axios.get(url);
      const res = result.data.results;
      setSpecies([...species, ...res]);
    };
    fetchSpecies();
  }, []);
  return (
    <SpeciesContext.Provider value={species}>
      {props.children}
    </SpeciesContext.Provider>
  );
};

export default SpeciesProvider;
