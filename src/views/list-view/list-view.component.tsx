import { useEffect, useState } from "react";
import axios from "axios";
import { StarWarsCharacter, StarWarsPeople } from "../../interfaces";
import ListViewCard from "./components/list-view-card/list-veiw-card.component";
import "./list-view.component.scss";
import Header from "./components/header/Header";
/* import { prependOnceListener } from "process"; */

function ListViewComponent() {
  let load: boolean = false;
  let next: string = "https://swapi.dev/api/people";
  const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);

  useEffect(() => {
    const url = "https://swapi.dev/api/people";
    const fetchCharacters = async () => {
      const res = await axios(url);
      const people = res.data.results;
      setCharacters([characters, ...people]);
    };
    fetchCharacters();
  }, []);

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
    <>
      <Header />
      <section className="app-list-view">
        {characters.map((character) => (
          <ListViewCard character={character} />
        ))}
      </section>
    </>
  );
}

export default ListViewComponent;
