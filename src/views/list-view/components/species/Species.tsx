import React, { useContext, useState, useEffect } from "react";
import { SpeciesContext } from "../../../../context/SpeciesContext";
import { StarWarsSpecie } from "../../../../interfaces";
import "./Species.scss";

const Species = () => {
  const speciesContext = useContext(SpeciesContext);
  const [species, setSpecies] = useState<StarWarsSpecie[]>(speciesContext);
  console.log(speciesContext);

  const alphabeticalOrder = () => {
    setSpecies([...speciesContext.sort((a, b) => (a.name > b.name ? 1 : -1))]);
    console.log(species);
  };

  return (
    <div>
      <button onClick={alphabeticalOrder}>Alphabetic Order</button>
      <div>
        {species.map((specie) => (
          <div key={specie.created}>{specie.name} </div>
        ))}
      </div>
    </div>
  );
};

export default Species;
