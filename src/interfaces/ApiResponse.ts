export interface ApiResponse {
  confirmed: {
    value: number;
    detail: "https://covid19.mathdro.id/api/confirmed";
  };
  recovered: {
    value: number;
    detail: "https://covid19.mathdro.id/api/recovered";
  };
  deaths: {
    value: number;
    detail: "https://covid19.mathdro.id/api/deaths";
  };
  dailySummary: "https://covid19.mathdro.id/api/daily";
  dailyTimeSeries: {
    pattern: "https://covid19.mathdro.id/api/daily/[dateString]";
    example: "https://covid19.mathdro.id/api/daily/2-14-2020";
  };
  image: "https://covid19.mathdro.id/api/og";
  source: "https://github.com/mathdroid/covid19";
  countries: "https://covid19.mathdro.id/api/countries";
  countryDetail: {
    pattern: "https://covid19.mathdro.id/api/countries/[country]";
    example: "https://covid19.mathdro.id/api/countries/USA";
  };
  lastUpdate: string; // date
}
