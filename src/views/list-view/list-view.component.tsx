import { useEffect, useState } from "react";
import axios from "axios";
import { StarWarsCharacter, StarWarsPeople } from "../../interfaces";
import ListViewCard from "./components/list-view-card/list-veiw-card.component";
/* import "./list-view.component.scss"; */

/* import { prependOnceListener } from "process"; */

function ListViewComponent(props: { characters: StarWarsCharacter[] }) {
  /*  function makeApiCall(url: string) {
    console.log("API CALL", load);
    if (!load) {
      load = true;
      fetch(url)
        .then((people) => people.json())
        .then((people: StarWarsPeople) => {
          setCharacters((characters) => [...characters, ...people.results]);

          if (people.next) {
            next = people.next;
          }
          load = false;
        });
    }
  } */

  return (
    <section className="cards">
      {props.characters.map((character) => (
        <ListViewCard character={character} />
      ))}
    </section>
  );
}

export default ListViewComponent;
