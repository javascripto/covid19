import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';
import { Observable, of, throwError } from 'rxjs';

import { ApiResponse, CountriesResponse, CountryResponse } from '../interfaces';

const COVID19_API = 'https://covid19.mathdro.id/api';

export class Covid19Service {
  static api(): Observable<ApiResponse> {
    return ajax.getJSON(COVID19_API);
  }

  static countries(): Observable<CountriesResponse> {
    return ajax.getJSON(`${COVID19_API}/countries`);
  }

  static country(country: string): Observable<CountryResponse> {
    return ajax.getJSON<CountryResponse>(`${COVID19_API}/countries/${country}`)
      .pipe(catchError((error: AjaxError) => {
        const O = { value: 0, detail: ''};
        return (error.status !== 404) 
          ? throwError(error)
          : of({ confirmed: O, deaths: O, recovered: O, lastUpdate: ''});
      }));
  }
}
