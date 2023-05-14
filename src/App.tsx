import { useEffect, useState } from 'react';
import './global.css';
import { PeopleAPI, Person, People } from './swapi.model';
import Header from './components/Header';
import Main from './components/Main';
import useFetch from './hooks/useFetch';

function App() {
  const [people, setPeople] = useState<People>({
    next: '',
    previous: '',
    characters: [],
  });
  const { sendRequest, status } = useFetch();

  const transformData = (data: PeopleAPI): void => {
    let newData: Person[] = [];
    for (const e of data.results) {
      newData.push({
        name: e.name,
        height: e.height,
        mass: e.mass,
        hairColor: e.hair_color,
      });
    }
    if (!data.previous && data.next)
      setPeople({ next: data.next, previous: '', characters: newData });
    if (!data.next && data.previous)
      setPeople({ next: '', previous: data.previous, characters: newData });
    if (data.next && data.previous)
      setPeople({
        next: data.next,
        previous: data.previous,
        characters: newData,
      });
  };

  const pageHandler = (page: string) => {
    if (page) {
      sendRequest(page, transformData);
    }
  };

  useEffect(() => {
    console.log('eff');
    sendRequest('https://swapi.dev/api/people', transformData);
  }, []);

  return (
    <>
      <Header
        next={people.next}
        previous={people.previous}
        pageHandler={pageHandler}
      />
      {status.loading && <div className="message">Loading...</div>}
      {status.error && <div className="message error">{status.error}</div>}
      {!status.error && !status.loading && (
        <Main characters={people.characters} />
      )}
    </>
  );
}

export default App;
