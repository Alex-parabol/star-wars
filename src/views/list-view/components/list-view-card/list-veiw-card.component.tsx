import { useEffect } from 'react';
import { StarWarsCharacter } from '../../../../interfaces';
import './list-veiw-card.component.scss'

function ListViewCard(props: { character: StarWarsCharacter }) {

  useEffect(() => {
  }, []);

  return (
    <article className='app-list-view-card'>
      <h2 className='app-list-view-card__title'>{props.character.name}</h2>
      <div className='app-list-view-card__height'>
        <span className='app-list-view-card__height-title'>Altura:</span>
        <span className='app-list-view-card__height-info'>{props.character.height}</span>
      </div>
    </article>
  )
}

export default ListViewCard;
