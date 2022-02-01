import React, { useContext, useState, useEffect } from "react";
import { SpeciesContext } from "../../../../context/SpeciesContext";
import { StarWarsSpecie } from "../../../../interfaces";
import "./Species.scss";

const Species = () => {
  const speciesContext = useContext(SpeciesContext);
  const [species, setSpecies] = useState<StarWarsSpecie[]>(speciesContext);
  const [ordered, setOrdered] = useState<Boolean>(false);
  console.log(speciesContext);

  useEffect(() => {
    if (!ordered) {
      setSpecies([...species]);
    } else {
      setSpecies([
        ...speciesContext.sort((a, b) => (a.name > b.name ? 1 : -1)),
      ]);
    }
  }, [ordered]);
  const orderedSpecies = speciesContext.sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  const alphabeticalOrder = () => {
    setSpecies([...speciesContext.sort((a, b) => (a.name > b.name ? 1 : -1))]);
    if (ordered) {
      setOrdered(false);
    } else {
      setOrdered(true);
    }

    console.log(species);
  };

  return (
    <div>
      <button onClick={alphabeticalOrder}>Alphabetic Order</button>
      <div className="cards">
        {species.map((specie) => (
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p>{specie.name} </p>
              </div>
              <div className="card-back">
                <h1>{specie.homeworld}</h1>
                <ul>
                  <li>
                    <strong>Languaje:</strong> {specie.language}
                  </li>
                  <li>
                    <strong>Designation:</strong> {specie.designation}
                  </li>
                  <li>
                    <strong>Eye colors:</strong> {specie.eye_colors}
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Species;
