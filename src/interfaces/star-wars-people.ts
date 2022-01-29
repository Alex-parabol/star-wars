export interface StarWarsPeople {
  count: number;
  next?: string;
  previous?: string;
  results: StarWarsCharacter[];
}

export interface SearchProps {
  getQuery: Function;
}
export interface StarWarsCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}

export interface StarWarsSpecies {
  count: number;
  next: string;
  previous: any;
  results: StarWarsSpecie[];
}

export interface StarWarsSpecie {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld?: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
