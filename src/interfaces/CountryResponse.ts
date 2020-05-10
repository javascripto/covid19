export interface CountryResponse {
  confirmed: {
    value: number;
    detail: string; // url
  };
  recovered: {
    value: number;
    detail: string; // url
  };
  deaths: {
    value: number;
    detail: string; // url
  };
  lastUpdate: string; // date
}
