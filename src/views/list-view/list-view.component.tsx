import { useEffect, useState } from 'react';
import { StarWarsCharacter, StarWarsPeople } from '../../interfaces';
import ListViewCard from './components/list-view-card/list-veiw-card.component';

function ListViewComponent() {

  let load: boolean = false;
  let next: string = 'https://swapi.dev/api/people';
  const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);

  useEffect(() => {
    console.log('USEEFFECT');
    makeApiCall(next);

    window.addEventListener('scroll', (event) => {
      const totalHeight = document.documentElement.offsetHeight;
      const offset = 80;

      if ((totalHeight - (window.scrollY + window.innerHeight)) < offset) {
        makeApiCall(next);
      }
    });
  }, []);

  function makeApiCall(url: string) {
    console.log('API CALL', load);
    if (!load) {
      load = true;
      fetch(url)
        .then(people => people.json())
        .then((people: StarWarsPeople) => {
          setCharacters(characters => [...characters, ...people.results]);

          if (people.next) {
            next = people.next;
          }
          load = false;
        });
    }
  }


  return (
    <section className='app-list-view'>
      {characters.map(character => <ListViewCard character={character} key={character.name} />)}
    </section>
  )
}

export default ListViewComponent;