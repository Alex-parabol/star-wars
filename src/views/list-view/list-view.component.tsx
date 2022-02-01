import { useEffect, useState } from "react";
import axios from "axios";
import { StarWarsCharacter, StarWarsPeople } from "../../interfaces";
import ListViewCard from "./components/list-view-card/list-veiw-card.component";
/* import "./list-view.component.scss"; */

/* import { prependOnceListener } from "process"; */

function ListViewComponent(props: { characters: StarWarsCharacter[] }) {
  return (
    <section className="cards">
      {props.characters.map((character) => (
        <ListViewCard character={character} key={character.url} />
      ))}
    </section>
  );
}

export default ListViewComponent;
