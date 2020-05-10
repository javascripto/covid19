import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export class IpService {
  static country(): Observable<string> {
    return ajax({ url: 'https://ipapi.co/country', responseType: 'text' })
      .pipe(map(({ response }) => response));
  }
}
