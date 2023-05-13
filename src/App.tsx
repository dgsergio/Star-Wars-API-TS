import { useEffect, useState } from 'react';
import Character from './components/Character';
import './global.css';
import dummy from './mocks/dummy_swapi.json';
import { Results, Person } from './swapi.model';

function App() {
  const [people, setPeople] = useState<Person[]>([]);

  const transformData = (data: Results[]): Person[] => {
    let newData: any[] = [];
    for (const e of data) {
      newData.push({
        name: e.name,
        height: e.height,
        mass: e.mass,
        hairColor: e.hair_color,
      });
    }
    return newData;
  };
  useEffect(() => {
    setPeople(transformData(dummy.results));
  }, []);

  return (
    <div className="card-container">
      {people.map((result: Person) => {
        return <Character key={result.name} person={result} />;
      })}
    </div>
  );
}

export default App;
