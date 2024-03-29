interface Country {
  name: string;
  iso2: string;
  iso3: string;
}

export interface CountriesResponse {
  countries: Country[];
}
