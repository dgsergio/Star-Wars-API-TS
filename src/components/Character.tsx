import { Person } from '../swapi.model';

export default function Character(props: { person: Person }) {
  return (
    <div className="card">
      <h2>{props.person.name}</h2>
      <ul>
        <li>Height: {props.person.height}cm</li>
        <li>Mass: {props.person.mass}kg</li>
        <li>Hair Color: {props.person.hairColor}</li>
      </ul>
    </div>
  );
}
