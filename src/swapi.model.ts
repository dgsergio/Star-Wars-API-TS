export type Person = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
};

type PersonAPI = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
};

export interface PeopleAPI {
  next?: string | null;
  previous?: string | null;
  results: PersonAPI[];
}

export interface People {
  next: string;
  previous: string;
  characters: Person[];
}
