import React, { useContext, useState, useEffect } from "react";
import { SpeciesContext } from "../../../../context/SpeciesContext";
import { StarWarsSpecie } from "../../../../interfaces";
import "./Species.scss";
import { Link } from "react-router-dom";

const Species = () => {
  const speciesContext = useContext(SpeciesContext);
  const [species, setSpecies] = useState<StarWarsSpecie[]>(
    speciesContext.species
  );
  console.log(speciesContext.species);

  useEffect(() => {
    setSpecies([...speciesContext.species]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const alphabeticalOrder = () => {
    setSpecies([
      ...speciesContext.species.sort((a, b) => (a.name > b.name ? 1 : -1)),
    ]);

    console.log(species);
  };

  return (
    <div>
      <button className="button_slide slide_down" onClick={alphabeticalOrder}>
        Alphabetic Order
      </button>
      <div className="cards">
        {speciesContext.species.map((specie) => (
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p>{specie.name} </p>
              </div>
              <div className="card-back">
                <h1>Features:</h1>
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
                  <Link to={`/species/${specie.name}`}>
                    <li className="detail">Details of {specie.name} </li>
                  </Link>
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
