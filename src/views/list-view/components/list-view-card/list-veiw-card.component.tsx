/* import { useEffect } from 'react'; */
import { StarWarsCharacter } from "../../../../interfaces";
/* import "./list-veiw-card.component.scss"; */

function ListViewCard(props: { character: StarWarsCharacter }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <p>{props.character.name} </p>
        </div>
        <div className="card-back">
          <h1>{props.character.name}</h1>
          <ul>
            <li>
              <strong>Height:</strong> {props.character.height}
            </li>
            <li>
              <strong>Species:</strong> {props.character.gender}
            </li>
            <li>
              <strong>Starship:</strong> {props.character.starships}
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListViewCard;
