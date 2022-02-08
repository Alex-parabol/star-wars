import { StarWarsCharacter } from "../../interfaces";
import ListViewCard from "./components/list-view-card/list-veiw-card.component";

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
