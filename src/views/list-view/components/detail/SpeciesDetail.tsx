import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SpeciesContext } from "../../../../context/SpeciesContext";

function SpeciesDetail() {
  const speciesContext = useContext(SpeciesContext);
  console.log(speciesContext);
  const { name } = useParams();
  const thisSpecie = speciesContext.find((prod) => prod.name === name);

  return (
    <div>
      <h1>{thisSpecie?.name}</h1>
      <p>Designation: ${thisSpecie?.designation}</p>
      <p>{thisSpecie?.films}</p>
    </div>
  );
}

export default SpeciesDetail;
