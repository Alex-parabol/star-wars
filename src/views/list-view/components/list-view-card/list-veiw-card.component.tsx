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
          <h1>Features:</h1>
          <ul>
            <li>
              <strong>Height:</strong> {props.character.height}
            </li>
            <li>
              <strong>Weight:</strong> {props.character.mass}kg
            </li>
            <li>
              <strong>Gender:</strong> {props.character.gender}
            </li>
            <li>
              <strong>Skin Color: </strong>
              {props.character.skin_color}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListViewCard;
