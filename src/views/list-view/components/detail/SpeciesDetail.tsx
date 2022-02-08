import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SpeciesContext } from "../../../../context/SpeciesContext";
import "./SpeciesDetail.scss";

function SpeciesDetail() {
  const speciesContext = useContext(SpeciesContext);

  const { name } = useParams();
  const thisSpecie = speciesContext.species.find((prod) => prod.name === name);

  // A falta de más información en la api, bueno es lorem ipsum :D

  return (
    <div className="detail-container">
      <h1>{thisSpecie?.name}</h1>
      <p>
        Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Pariatur exercitationem non magni quasi deleniti modi laudantium beatae,
        qui dolor suscipit voluptatibus eum quo quisquam culpa. Tempore quia
        veniam consectetur! Hic? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Cupiditate ea, enim possimus temporibus aspernatur
        consectetur voluptas nam et molestias dolorem, explicabo assumenda
        veritatis consequatur aliquid, maxime eaque ex ipsam qui.
      </p>
    </div>
  );
}

export default SpeciesDetail;
