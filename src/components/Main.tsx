import { Person } from '../swapi.model';
import Character from './Character';

export default function Main(props: any) {
  return (
    <main>
      <section className="card-container">
        {props.characters.map((result: Person) => {
          return <Character key={result.name} person={result} />;
        })}
      </section>
    </main>
  );
}
