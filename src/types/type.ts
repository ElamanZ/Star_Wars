import type { Gender } from "./enums";

export type Person = {
  name: string;
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: Gender;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
};

export type PersonSummary = {
  uid: string;
  name?: string;
  properties?: Person;
  url?: string;
};

export type PeopleResponse = {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: PersonSummary[];
  result: PersonSummary[];
};

export type PeopleFilterArgs = {
  page: number;
  limit: number;
  name?: string;
};
