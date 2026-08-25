import { getData } from "country-list";

export interface Country {
  name: string;
  code: string;
}

export const countries: Country[] = getData()
  .map((country) => ({
    name: country.name,
    code: country.code.toUpperCase(),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));