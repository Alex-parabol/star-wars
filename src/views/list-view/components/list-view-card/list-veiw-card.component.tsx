/* import { useEffect } from 'react'; */
import { StarWarsCharacter } from "../../../../interfaces";
import "./list-veiw-card.component.scss";

function ListViewCard(props: { character: StarWarsCharacter }) {
  return (
    <article className="app-list-view-card">
      <div className="app-list-view-card-back"></div>
      <div className="app-list-view-card-front"></div>
      <h1 className="app-list-view-card-front__title">
        {props.character.name}{" "}
      </h1>
      <div className="app-list-view-card-back__height">
        <span className="app-list-view-card-back__height-title">Altura:</span>
        <span className="app-list-view-card-back__height-info">
          {props.character.height}
        </span>
      </div>
    </article>
  );
}

export default ListViewCard;
